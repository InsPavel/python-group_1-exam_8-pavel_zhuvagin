import React from 'react'
import Card from "../UI/Card/Card";

const TaskCard = props => {
    const {summary, description, due_date, time_planned, id} = props.task;
    const link = {
        url: '/movies/' + id
    };
    return <Card header={summary} text={description} date={due_date} time={time_planned} link={link}/>;
};

export default TaskCard;