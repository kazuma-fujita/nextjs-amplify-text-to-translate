import { ChangeEvent, useState, useCallback } from "react";
import { ExchangeLanguageSelectBox } from "./exchange-language-select-box";
import { TranslateLanguageTextarea } from "./translate-language-textarea";

export const TranslateLanguageForm = () => {
  const [selectSource, setSelectSource] = useState("ja");
  const [selectTarget, setSelectTarget] = useState("en");

  return (
    <>
      <ExchangeLanguageSelectBox
        setSelectSource={setSelectSource}
        setSelectTarget={setSelectTarget}
      />
      <TranslateLanguageTextarea
        sourceLanguage={selectSource}
        targetLanguage={selectTarget}
      />
    </>
  );
};
