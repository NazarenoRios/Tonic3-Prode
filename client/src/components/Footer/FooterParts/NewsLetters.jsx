import React from "react";
import { useTranslation } from "react-i18next";

import emailIcon from "../../../assets/icons/news-icon.svg"
import { Input } from "../../../common/Input";
import { NewsLettersSection } from "../StyledComponents";

function NewsLetters() {

    const submitHandler = (event) => {
        event.preventDefault();
      };

      const { t } = useTranslation(["footer"])

  return (
    <NewsLettersSection>
        <p>{t("suscribe_newsletter")}</p>
        <img src={emailIcon} alt=""></img>
        <form onSubmit={submitHandler}>
          <h4>{t("suscribe_newsletter")}</h4>
          <Input
            type="email"
            name="email"
            ctaTitle="submit"
            placeholder="email address"
          />
        </form>
    </NewsLettersSection>
  )
}


export default NewsLetters;
