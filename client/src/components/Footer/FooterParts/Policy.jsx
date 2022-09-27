import React from "react";
import { useTranslation } from "react-i18next";

import {Link} from "react-router-dom"
import { PolicySection } from "../StyledComponents";

function Policy() {

  const { t } = useTranslation(["footer"])

  return (
    <PolicySection>
        <div>
        <p>{t("policy")}</p>
        <ul>
          <li>
            <Link to="/terms">{t("terms")}</Link>
          </li>
          <li>
            <Link to="/privacy">{t("privacy")}</Link>
          </li>
          <li>
            <Link to="/cookie">Cookie</Link>
          </li>
        </ul>
      </div>
      <div>&copy; TONIC3 PRODE</div>
    </PolicySection>
  )
}



export default Policy;
