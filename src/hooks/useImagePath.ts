import { useEffect, useState } from 'react';

type HookResult = [
  path: string,
  error: any,
];

export default function useImagePath(fileName: string): HookResult {
  const [path, setPath] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/images/${fileName}`);
        setPath(response.default);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchImage();
  }, [fileName]);

  return [path, error];
}
