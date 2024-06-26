import React from "react";
import { changeLanguage } from "i18next";

import { LANGUAGES } from "utils/constants/languages";

import "./Header.scss";

const Header = () => {

  return (
    <div className="Header">
      <select id="language" onChange={(e) => changeLanguage(e.target.value)}>
        <option value={LANGUAGES.en.code}>English</option>
        <option value={LANGUAGES.ru.code}>Russian</option>
        <option value={LANGUAGES.az.code}>Azerbaijani</option>
      </select>
    </div>
  );
};

export default Header;
