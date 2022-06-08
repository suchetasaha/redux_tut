import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtg94RJZLgNVUOWbCzT8muIJwvqGvrOCPv3SdSbklT4r6YHwWRHUMeWpilN0LGqjxTbw&usqp=CAU" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className="remove-wrapper"
                    onClick={
                        ()=>{props.removeToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home