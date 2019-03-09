import React, {Component} from 'react';

class TaskDetailCard extends Component {
    render(){
        const {summary, description, due_date, time_planned} = this.props.task;
        return <div className='card'>
            <h5 className="card-title">{summary}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{due_date}</p>
            <p className="card-text">{time_planned}</p>
        </div>
    }
}

export default TaskDetailCard;