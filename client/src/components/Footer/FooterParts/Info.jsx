import React from "react";
import { Link } from "react-router-dom"
import { InfoSection, SecondaryLink } from "../StyledComponents";
import { useTranslation } from "react-i18next";

function Info() {

  const { t } = useTranslation(["footer"])

  return (
    <InfoSection>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/returns">{t("returns")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </div>
      <SecondaryLink>
        <Link to="/credits">{t("credits")}</Link>
      </SecondaryLink>
    </InfoSection>
  );
}



export default Info;
