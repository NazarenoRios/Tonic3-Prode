import React from "react";

import circleContainerIcon from "../../../assets/icons/circle-container.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import { Icon, OtherSection, Social } from "../StyledComponents";

function Other() {
  return (
    <OtherSection>
      <Icon>
        <img src={circleContainerIcon} alt=""></img>
        <img src={arrowIcon} alt=""></img>
      </Icon>
      <Social>
        <img src={facebook} alt="facebook page" />
        <a href="https://www.instagram.com/" alt="" target="_blank" ><img src={instagram} alt="instagram page" /></a>
      </Social>
    </OtherSection>
  );
}



export default Other;
