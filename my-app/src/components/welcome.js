
import React from "react";
import Foto from "./foto";
import Divider from "./divider";
import {Card} from "antd";
function Welcome(){
   return (
    <div
    style={{
      backgroundColor: "#FCFAEA",
      position:"relative",
      width: "100%",
      height: "150vh",
      
    }}
  >
      {/* <Foto style={{marginLeft:"850px", objectFill:"cover"}}></Foto> */}


{/* <Card   style={{marginTop:"150px",marginLeft:"30px" ,width:"600px",borderRadius: "20px",
  backdropFilter: "blur(20px) hue-rotate(120deg)",
  webkitBackdropFilter: "hue-rotate(120deg)"}}>

    <p>We are a women-led social enterprise  combining development research and technology solutions to address the digital information gap facing women in trade.</p>
<p>We build, implement, and scale mobile trade and market information solutions for small and medium enterprises across East Africa.</p>
    <p> Since 2017, we have directly reached over 27,000 business operators in “low technology” environments in Kenya, Uganda, Rwanda, and Tanzania and indirectly empowered many more traders as partners in program design and technical implementation.</p>

<p>Sauti East Africa brings proven expertise in information technology solutions, research, mobile data collection, evaluation, and trade insights.

    </p>
</Card> */}




<Divider style={{paddingTop:"300px"}}/>

</div>



   )
} export default Welcome