import React, {useEffect, useState} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory, useParams} from "react-router-dom";
import {NEW_ITEM_PATH} from "../utils/URLs";
import {Button, Space, Layout, Divider} from 'antd';
import MyProducts from "./myList";

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
    <div>
        <Layout>
         <Space direction="horizontal" size="large">
            
 
      <h2 style={{marginLeft:"55px"}}> Welcome! </h2>
      <Divider type="vertical"/>  <Button  onClick={addItem}>
          Add Product
        </Button>
        </Space>
      
      {myitems.map((item) => (
        <MyProducts key={item.id} item={item} />
      ))}
    
    </Layout>
    </div>
  );
};

export default MyListings;
