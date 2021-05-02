// import React, {useState, useEffect, useContext} from "react";
// import axiosAuth from "../util/axios";
// import AddItem from "./addProduct";
// import {Link,useHistory} from "react-router-dom";
// import {NEW_ITEM_PATH, USERS_PATH} from '../util/api';
// import {UserContext} from '../App';

// const MyProfile = () => {
//     const {push} = useHistory()
//     const {user, setUser} = useContext(UserContext)
//   const [myItems, setmyitems] = useState([])
//   const [userList, setUserList] = useState([])
  
//     useEffect(() => {
//         // get list of all users - single API call providing data to all children
//         axiosAuth()
//         .get(`${USERS_PATH}`)
//         .then(res => {
//             setUserList(res.data.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         //set user context - uses username from localStorage if the page was reloaded
//         let usernameSnapshot = user.username
//         if (usernameSnapshot === '') {
//             usernameSnapshot = localStorage.getItem('username')
//         }
//         axiosAuth()
//             .get(`${USERS_PATH}`)
//             .then(res => {
//                 const currentUser = res.data.data.filter(u => usernameSnapshot === u.username)
//                 const userId = currentUser[0].id
//                 setUser({
//                     username: usernameSnapshot,
//                     id: userId
//                 })
//                 // set list of items for sale
//                 // triggers children to mount
//                 // children require user context to mount correctly

//              axiosAuth()
//                 .get(`${NEW_ITEM_PATH}${id}`)
//                 .then(res => {
//                     setmyItems(res.data.data);
//                  })
//                 .catch(err => {
//                 console.log("err", err);
//                 })
//             .catch(err => {
//             console.log(err)
       

//             })
//         },[]
//   )
//     }

//   return(
//     <div>
            
//     </div>
//     )
// }
// export default MyProfile
