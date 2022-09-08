import React from "react";
import { Link } from "react-router-dom"
import { InfoSection, SecondaryLink } from "../StyledComponents";

function Info() {
  return (
    <InfoSection>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/returns">Returns</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <SecondaryLink>
        <Link to="/credits">Credits</Link>
      </SecondaryLink>
    </InfoSection>
  );
}



export default Info;
