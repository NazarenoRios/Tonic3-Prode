import React from "react";

import emailIcon from "../../../assets/icons/news-icon.svg"
import { Input } from "../../../common/Input";
import { NewsLettersSection } from "../StyledComponents";

function NewsLetters() {

    const submitHandler = (event) => {
        event.preventDefault();
      };

  return (
    <NewsLettersSection>
        <p>Subscribe to newsletter</p>
        <img src={emailIcon} alt=""></img>
        <form onSubmit={submitHandler}>
          <h4>Subscribe to our newsletter</h4>
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
