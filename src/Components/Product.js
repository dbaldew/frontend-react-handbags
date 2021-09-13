import React from "react";

function Product(props) {
    return (
        <article>
            <span>{props.label}</span>
            <img src={props.img} alt = {props.alt}/>
            <p>{props.name}</p>
            <h4><i>{props.price}</i>"</h4>
        </article>
    )
}

export default Product;