import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation(["admin-panel"]);

  return (
    <div className="mt-24">
      <p className="bg-[#f1f3f8] dark:text-gray-200 text-gray-700 text-center m-20">
        {t("copyright")}
      </p>
    </div>
  );
}

export default Footer;
