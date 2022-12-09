import { ChangeEvent, useState, useCallback, Dispatch } from "react";
import React from "react";
import Select from "react-select/dist/declarations/src/Select";
import styles from "../../styles/Home.module.css";
import useTranslateLanguage from "../hooks/use-translate-language";
import { SelectBox } from "./selecct-box";

type Props = {
  setSelectSource: Dispatch<string>;
  setSelectTarget: Dispatch<string>;
};

export const ExchangeLanguageSelectBox = ({
  setSelectSource,
  setSelectTarget,
}: Props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Source Language</h2>
        <SelectBox
          options={options}
          defaultValue={"ja"}
          setSelectOption={setSelectSource}
        />
      </div>
      <div>&rarr;</div>
      <div className={styles.card}>
        <h2>Target Language</h2>
        <SelectBox
          options={options}
          defaultValue={"en"}
          setSelectOption={setSelectTarget}
        />
      </div>
    </div>
  );
};

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Albanian", value: "sq" },
  { label: "Amharic", value: "am" },
  { label: "Arabic", value: "ar" },
  { label: "Armenian", value: "hy" },
  { label: "Azerbaijani", value: "az" },
  { label: "Bengali", value: "bn" },
  { label: "Bosnian", value: "bs" },
  { label: "Bulgarian", value: "bg" },
  { label: "Catalan", value: "ca" },
  { label: "Chinese (Simplified)", value: "zh" },
  { label: "Chinese (Traditional)", value: "zh-TW" },
  { label: "Croatian", value: "hr" },
  { label: "Czech", value: "cs" },
  { label: "Danish", value: "da" },
  { label: "Dari", value: "fa-AF" },
  { label: "Dutch", value: "nl" },
  { label: "English", value: "en" },
  { label: "Estonian", value: "et" },
  { label: "Farsi (Persian)", value: "fa" },
  { label: "Filipino, Tagalog", value: "tl" },
  { label: "Finnish", value: "fi" },
  { label: "French", value: "fr" },
  { label: "French (Canada)", value: "fr-CA" },
  { label: "Georgian", value: "ka" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "Gujarati", value: "gu" },
  { label: "Haitian Creole", value: "ht" },
  { label: "Hausa", value: "ha" },
  { label: "Hebrew", value: "he" },
  { label: "Hindi", value: "hi" },
  { label: "Hungarian", value: "hu" },
  { label: "Icelandic", value: "is" },
  { label: "Indonesian", value: "id" },
  { label: "Irish", value: "ga" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Kannada", value: "kn" },
  { label: "Kazakh", value: "kk" },
  { label: "Korean", value: "ko" },
  { label: "Latvian", value: "lv" },
  { label: "Lithuanian", value: "lt" },
  { label: "Macedonian", value: "mk" },
  { label: "Malay", value: "ms" },
  { label: "Malayalam", value: "ml" },
  { label: "Maltese", value: "mt" },
  { label: "Marathi", value: "mr" },
  { label: "Mongolian", value: "mn" },
  { label: "Norwegian (Bokmål)", value: "no" },
  { label: "Pashto", value: "ps" },
  { label: "Polish", value: "pl" },
  { label: "Portuguese (Brazil)", value: "pt" },
  { label: "Portuguese (Portugal)", value: "pt-PT" },
  { label: "Punjabi", value: "pa" },
  { label: "Romanian", value: "ro" },
  { label: "Russian", value: "ru" },
  { label: "Serbian", value: "sr" },
  { label: "Sinhala", value: "si" },
  { label: "Slovak", value: "sk" },
  { label: "Slovenian", value: "sl" },
  { label: "Somali", value: "so" },
  { label: "Spanish", value: "es" },
  { label: "Spanish (Mexico)", value: "es-MX" },
  { label: "Swahili", value: "sw" },
  { label: "Swedish", value: "sv" },
  { label: "Tamil", value: "ta" },
  { label: "Telugu", value: "te" },
  { label: "Thai", value: "th" },
  { label: "Turkish", value: "tr" },
  { label: "Ukrainian", value: "uk" },
  { label: "Urdu", value: "ur" },
  { label: "Uzbek", value: "uz" },
  { label: "Vietnamese", value: "vi" },
  { label: "Welsh", value: "cy" },
];
