import React, {useEffect, useState} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory, useParams} from "react-router-dom";
import {NEW_ITEM_PATH} from "../utils/URLs";
import {Button, Space, Layout} from 'antd';
import MyProducts from "./MyList";

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
         <Space direction="horizontal" size="large">
      
      <h2>My Store <Button  onClick={addItem}>
          Add Product
        </Button></h2>
        </Space>
      {myitems.map((item) => (
        <MyProducts key={item.id} item={item} />
      ))}
      <div>
        <Button onClick={addItem}>Add Product</Button>
      </div>
    </div>
  );
};

export default MyListings;
