import { Dispatch } from "react";
import styles from "../../styles/Home.module.css";
import { languageOptions } from "../data/language-options";
import { SelectBox } from "./select-box";

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
          options={languageOptions}
          defaultValue={"ja"}
          setSelectOption={setSelectSource}
        />
      </div>
      <div>&rarr;</div>
      <div className={styles.card}>
        <h2>Target Language</h2>
        <SelectBox
          options={languageOptions}
          defaultValue={"en"}
          setSelectOption={setSelectTarget}
        />
      </div>
    </div>
  );
};
