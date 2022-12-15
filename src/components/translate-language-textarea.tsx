import { ChangeEvent, useCallback, useState } from "react";
import styles from "../../styles/Home.module.css";
import { languageOptions } from "../data/language-options";
import useTranslateLanguage from "../hooks/use-translate-language";

type Props = { sourceLanguage: string; targetLanguage: string };

export const TranslateLanguageTextarea = ({
  sourceLanguage,
  targetLanguage,
}: Props) => {
  const [sourceValue, setSourceValue] = useState("");
  const { translateLanguage, translatedText } = useTranslateLanguage();

  const getLanguageLabel = useCallback((languageCode: string): string => {
    const foundOption = languageOptions.find(
      (option) => option.value === languageCode
    );
    return foundOption ? foundOption.label : "";
  }, []);

  const handleSourceChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const sourceText = event.target.value;
      setSourceValue(sourceText);
      translateLanguage(sourceText, sourceLanguage, targetLanguage);
    },
    [sourceLanguage, targetLanguage, translateLanguage]
  );

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>{getLanguageLabel(sourceLanguage)}</h2>
        <textarea
          name="source"
          value={sourceValue}
          onChange={handleSourceChange}
          rows={8}
          cols={32}
        />
      </div>
      <div>&rarr;</div>
      <div className={styles.card}>
        <h2>{getLanguageLabel(targetLanguage)}</h2>
        <textarea
          name="target"
          rows={8}
          cols={32}
          value={translatedText}
          readOnly
        />
      </div>
    </div>
  );
};
