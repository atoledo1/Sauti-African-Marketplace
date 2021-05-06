import React, {useState, useContext} from "react";
import sauti from "../images/sauti.png"

import * as yup from "yup";
// import loginSchema from "../LoginShema";


import "../App.css";
import Login from "./login"

function Main(){
    
    
    
    return(
<div style={{ height:"680px",zIndex:"80", width:"100%",backgroundImage:`url(${sauti})`,
   backgroundSize: 'cover',
   backgroundPosition:"center",
  backgroundRepeat: 'no-repeat'}}>

<div style={{backgroundColor:"#FCFAEA", zindex:"100",  width: '750px',
        height: '680px', padding:"60px", paddingLeft:"200px", paddingTop:"100px"}}>
< Login> </Login>
</div>






</div>

)}

export default Main