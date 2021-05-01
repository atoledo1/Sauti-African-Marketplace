import React from 'react'

const productList = (props) => {
    

console.log('props', props)
    return (
        <div>
            {/* <p>{props.items}</p> */}
            {props.items.map(item =>{

                return(
                    <div>
                    <div className='CardContainer'>
                <h2>{item.product_name}</h2>
                        <h3>{item.product_category}</h3>
                       <h3> { item.product_description}</h3>
                       <div>                </div> 
                       <h3> {item.country}</h3>
                       <h3>{item.market_name} </h3>
                       <h3>{item.product_price} </h3>
                       <h3> {item.product_quantity}</h3>
                       
                    </div>
                    </div>
                )
            })}


            
        </div>
    )
}

export default productList