import React from "react";

import {Link} from "react-router-dom"
import { PolicySection } from "../StyledComponents";

function Policy() {
  return (
    <PolicySection>
        <div>
        <p>Policy</p>
        <ul>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
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
