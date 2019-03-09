import React from 'react'
import Card from "../UI/Card/Card";
import {NavLink} from "react-router-dom";

const TaskCard = props => {
    const {summary, description, due_date, time_planned, id} = props.task;
    const link = {
        url: '/tasks/' + id
    };
    return <NavLink to={link.url}>
        <Card header={summary} text={description} date={due_date} time={time_planned}/>
    </NavLink>
};

export default TaskCard;