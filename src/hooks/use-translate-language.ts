import { TranslateTextOutput } from "@aws-amplify/predictions";
import { Predictions } from "aws-amplify";
import { useState, useEffect, useCallback } from "react";

const useTranslateLanguage = () => {
  const [translatedText, setTranslatedText] = useState("");
  const translateLanguage = useCallback(async (sourceText: string) => {
    if (!sourceText.trim().replace(/\r?\n/g, "")) return;
    try {
      const result: TranslateTextOutput = await Predictions.convert({
        translateText: {
          source: {
            text: sourceText,
            // language : "es" // defaults configured on aws-exports.js
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          // targetLanguage: "en"
        },
      });
      console.log("res", result);
      setTranslatedText(result.text);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { translateLanguage, translatedText };
};

export default useTranslateLanguage;
