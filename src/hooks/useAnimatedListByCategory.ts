import {
  Ref,
  createRef,
  useCallback, useEffect, useRef, useState,
} from 'react';

interface HasCategory {
  categoryId: string;
  id: string;
}

export default function useAnimatedListByCategory(initialValue: HasCategory[] = []) {
  const [items, setItems] = useState(initialValue);
  const [itemsToRender, setItemsToRender] = useState(initialValue);
  const [itemsToRenderAfter, setItemsToRenderAfter] = useState(initialValue);
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([] as string[]);

  /**
   * Animated Refs
   */

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const getAnimatedRef = useCallback((itemId: string) => {
    let animatedRef = animatedRefs.current.get(itemId);
    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  /**
   * Functions
   */

  const getItemsFromCategory = useCallback((categoryId: string): HasCategory[] => {
    if (categoryId === '0') return items;

    return items.filter((item) => item.categoryId === categoryId);
  }, [items]);

  // const getItemsToRemove = useCallback((categoryId: string) => {
  //   if (categoryId === '0') return [];

  //   return items.filter((item) => item.categoryId !== categoryId);
  // }, [items]);

  const handleSelectCategory = useCallback((categoryId: string) => {
    if (categoryId === selectedCategory) return;

    const lastCategory = selectedCategory;
    setSelectedCategory(categoryId);

    if (categoryId === '0') {
      setItemsToRender(items);
      setPendingRemovalItemsIds([]);
      return;
    }

    const itemsToRemove = getItemsFromCategory(lastCategory).map((item) => item.id);

    setItemsToRender(getItemsFromCategory(lastCategory));
    setItemsToRenderAfter(getItemsFromCategory(categoryId));
    setPendingRemovalItemsIds(itemsToRemove);
  }, [getItemsFromCategory, items, selectedCategory]);

  const handleAnimationEnd = useCallback((itemId: string) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animatedRefs.current.delete(itemId);
    animationEndListeners.current.delete(itemId);

    setPendingRemovalItemsIds((prevState) => prevState.filter((id) => id !== itemId));

    setItemsToRender((prevState) => {
      const newItems = prevState.filter((item) => item.id !== itemId);
      if (newItems.length === 0) {
        setItemsToRenderAfter([]);
        setPendingRemovalItemsIds([]);

        return itemsToRenderAfter;
      }

      return prevState.filter((item) => item.id !== itemId);
    });
  }, [itemsToRenderAfter]);

  const renderList = useCallback((renderItem: Function, listToRender?: HasCategory[]) => {
    const itemsList = listToRender || itemsToRender;

    return itemsList.map((item: any) => {
      const isLeaving = pendingRemovalItemsIds.includes(item.id);
      const animatedRef: Ref<any> = getAnimatedRef(item.id);

      return renderItem(item, { isLeaving, animatedRef });
    });
  }, [getAnimatedRef, itemsToRender, pendingRemovalItemsIds]);

  /**
   * Hooks
   */

  useEffect(() => {
    setItemsToRender(items);
    setItemsToRenderAfter(items);
  }, [items]);

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;

      const alreadyHasListener = animationEndListeners.current.has(itemId);

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => {
          handleAnimationEnd(itemId);
        };

        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animationEndListeners.current.set(itemId, removeListener);
        animatedElement.addEventListener('animationend', onAnimationEnd);
      }
    });
  }, [handleAnimationEnd, pendingRemovalItemsIds]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  return {
    items,
    setItems,
    renderList,
    handleSelectCategory,
  };
}
