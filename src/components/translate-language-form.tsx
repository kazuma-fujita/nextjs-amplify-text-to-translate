import { ChangeEvent, useState, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import useTranslateLanguage from "../hooks/use-translate-language";

export const TranslateLanguageForm = () => {
  const [source, setSource] = useState("");
  const { translateLanguage, translatedText } = useTranslateLanguage();

  const handleSourceChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const sourceText = event.target.value;
    setSource(sourceText);
    translateLanguage(sourceText);
  };

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Japanese &rarr;</h2>
        <textarea
          name="source"
          value={source}
          onChange={handleSourceChange}
          rows={8}
          cols={32}
        />
      </div>

      <div className={styles.card}>
        <h2>&larr; English</h2>
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
