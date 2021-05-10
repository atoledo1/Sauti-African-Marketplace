import React, {useEffect, useState} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory, useParams} from "react-router-dom";
import {NEW_ITEM_PATH} from "../utils/URLs";
import {Button, Space, Layout, PageHeader} from "antd";
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
    <div>
      <Layout className="backgroundgeneral" style={{height: "200vh"}}>
        <div className="space-align-container, backgroundgeneral"  style={{marginTop: "40px"}}>
         
          <div className="space-align-block" style={{height: "190vh"}}>
          <PageHeader style={{marginLeft:"0%", textAlign:"center"}}>
            <h2> Current Products for Sale:</h2>
          <Button  type="primary" onClick={addItem}>Add New Product</Button>
          </PageHeader>
        
            <Space  size="large" style={{marginLeft:"60px", marginTop:"25px"}} align="center" wrap>
              {myitems.map((item) => (
                <MyProducts key={item.id} item={item} />
              ))}

           
            </Space>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyListings;
