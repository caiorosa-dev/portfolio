import { useTranslation } from 'react-i18next';

export default function useTranslationText(key: string) {
  return useTranslation().t(key);
}
