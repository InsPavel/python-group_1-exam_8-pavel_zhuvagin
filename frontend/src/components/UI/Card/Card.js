import React from 'react';
import './Card.css'

const Card = props => {
    return <div className=' my_card'>
        {props.header || props.link ?<div className="card-body">
            {props.header ? <h5 className="card-title">{props.header}</h5> : null}
            {props.text ? <p className="card-text my_text" >{props.text}</p> : null}
            {props.date ? <p className="card-text">{props.date}</p> : null}
            {props.time ? <p className="card-text">{props.time}</p> : null}
        </div> : null}
    </div>
};

export default Card;