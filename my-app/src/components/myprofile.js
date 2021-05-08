import React, {useEffect, useState} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory, useParams} from "react-router-dom";
import {NEW_ITEM_PATH} from "../utils/URLs";
import {Button, Space, Layout, Divider} from 'antd';
import MyProducts from "./mylist";

const MyListings = (props) => {
  const {push} = useHistory();
  const [myitems, setMyItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`${NEW_ITEM_PATH}${1}`)
      .then((res) => {
        console.log(res);
        setMyItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const addItem = () => {
    push("/add-item");
  };
  return (
    <div >
        <Layout className="backgroundgeneral"  style={{height:"100vh"}}>
      
            
 
     
      

        <div className="space-align-container, backgroundgeneral">
      <div className="space-align-block" style={{paddingTop:"50px"}}>
        <Space align="center">
      
      {myitems.map((item) => (
        <MyProducts  key={item.id} item={item} />
      ))}
      
      <Button  onClick={addItem}>
          Add Product
        </Button>
      </Space>
    </div>
    </div>
    </Layout>
    </div>
  );
};

export default MyListings;