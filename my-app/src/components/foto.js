import { Image } from 'antd';
import sauti from "../images/sauti.svg";

function Foto() {
    return (
      <Image
      preview={false}
      
        width="850px"
        height="830px"
        src={sauti}
       
      />
    );
  }




export default Foto