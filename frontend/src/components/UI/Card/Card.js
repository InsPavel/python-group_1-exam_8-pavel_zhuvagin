import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = props => {
    return <div className='card'>
        {props.header || props.link ? <NavLink to={}><div className="card-body">
            {props.header ? <h5 className="card-title">{props.header}</h5> : null}
            {props.text ? <p className="card-text">{props.text}</p> : null}
            {props.date ? <p className="card-text">{props.date}</p> : null}
            {props.time ? <p className="card-text">{props.time}</p> : null}
        </div></NavLink> : null}
    </div>
};

export default Card;