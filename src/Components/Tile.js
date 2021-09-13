import React from "react";


function Tile(props) {
    return (
        <section>
            <img src={props.img} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </section>
    )
}

export default Tile;