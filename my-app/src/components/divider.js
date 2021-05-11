import React from "react";
import {Image} from "antd"
import divider from "../images/divider.svg"

function Divider() {
    return (
      <Image id="div"
      preview={false}
      
        width="100%"
        height="50%"
        src={divider}
       
      />
    );
  }




export default Divider