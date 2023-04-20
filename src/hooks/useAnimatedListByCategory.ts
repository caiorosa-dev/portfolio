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
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([] as string[]);

  /**
   * Animated Refs
   */

  console.log(selectedCategory);

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

  const handleSelectCategory = useCallback((categoryId: string) => {
    const ids = items.filter((item) => item.categoryId !== categoryId).map((item) => item.id);

    setSelectedCategory(categoryId);
    setPendingRemovalItemsIds(ids);
  }, [items]);

  const handleAnimationEnd = useCallback((itemId: string) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animatedRefs.current.delete(itemId);
    animationEndListeners.current.delete(itemId);

    setPendingRemovalItemsIds((prevState) => prevState.filter((id) => id !== itemId));
  }, []);

  const renderList = useCallback((renderItem: Function, listToRender?: HasCategory[]) => {
    const itemsList = listToRender || items;

    return itemsList.map((item: any) => {
      console.log('IDS PARA SAIR', pendingRemovalItemsIds);
      console.log(item.id);

      const isLeaving = pendingRemovalItemsIds.includes(item.id);
      const animatedRef: Ref<any> = getAnimatedRef(item.id);

      return renderItem(item, { isLeaving, animatedRef });
    });
  }, [getAnimatedRef, items, pendingRemovalItemsIds]);

  /**
   * Hooks
   */

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
