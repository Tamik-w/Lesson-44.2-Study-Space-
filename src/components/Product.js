import React from "react";
import noFoto from '../assets/no-foto.jpg';

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    return (
        <div className="product">
            <div className="img">
            <div className="img">
                {props.image ? <img src={props.image} alt={props.name} /> : <img src={noFoto} alt="Product stub" />}
            </div>
            </div>
            <div className="body">
                <h1 className="title">{props.name}</h1>
                <div className="price">{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;