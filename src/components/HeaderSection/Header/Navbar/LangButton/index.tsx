import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from './styles';

export default function LangButton() {
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(true);

  function handleChangeLanguage() {
    setShow((state) => !state);

    const { language } = i18n;
    let languageToBeSet = 'en';

    if (language === 'en') {
      languageToBeSet = 'pt';
    }

    i18n.changeLanguage(languageToBeSet);
    setTimeout(() => {
      setShow((state) => !state);
    }, 100);
  }

  return (
    <Button type="button" onClick={handleChangeLanguage}>
      <Fade top cascade when={show}>
        { t('langName') }
      </Fade>
    </Button>
  );
}
