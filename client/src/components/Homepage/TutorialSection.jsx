import React from "react";
import { useTranslation } from "react-i18next";
import ResponsivePlayer from "../../common/ResponsivePlayer/ResponsivePlayer";
import { TutorialTitle } from "./StyledComponents";

function TutorialSection() {

  const { t } = useTranslation(["home"]);

  return (
    <div className="mt-12 bg-[#172236]">
      <div className="flex justify-center">
        <TutorialTitle className="text-center mt-36">
        {t("HowToTakePart")}
        </TutorialTitle>
      </div>
      <div
        style={{ height: "80vh" }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-6 align-middle content-center text-white"
      >
        <div className="text-center">
          <h1 className="mb-5 text-3xl text-cyan-500 tracking-widest">
          {t("VideoTutorial")}
          </h1>
          <strong className="text-md tracking-widest">
          {t("underTitle")}{" "}
          </strong>
          <p className="mt-10 tracking-wider">
            {t("tutorial")}
          </p>
        </div>
        <div className="text-center">
          <ResponsivePlayer />
        </div>
      </div>
    </div>
  );
}

export default TutorialSection;
