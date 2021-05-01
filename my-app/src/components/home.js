import React,{useState, useEffect} from 'react'
import axiosAuth from '../util/axios';
import productList from './listing';


const Home = (props) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        axiosAuth()
        .get('/market')
        .then(res =>{
            console.log(res.data)
            setItems(res.data.data)
        })
        .catch(err =>{
            console.log('err',err)
        })
    },[]
    )


    return (
        <div>
          
            <productList key={items.id}  items={items} />
            
        </div>
    )
}

export default Home