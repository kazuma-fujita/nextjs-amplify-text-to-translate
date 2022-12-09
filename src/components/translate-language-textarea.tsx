import { ChangeEvent, useState, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import useTranslateLanguage from "../hooks/use-translate-language";

type Props = { sourceLanguage: string; targetLanguage: string };

export const TranslateLanguageTextarea = ({
  sourceLanguage,
  targetLanguage,
}: Props) => {
  const [sourceValue, setSourceValue] = useState("");
  const { translateLanguage, translatedText } = useTranslateLanguage();

  const handleSourceChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const sourceText = event.target.value;
    setSourceValue(sourceText);
    translateLanguage(sourceText, sourceLanguage, targetLanguage);
  };

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Japanese</h2>
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
        <h2>English</h2>
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
