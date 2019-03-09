import React, {Fragment, Component} from 'react'
import {TASKS_URL} from "../../api-urls";
import { NavLink } from 'react-router-dom';
import TaskCard from "../../components/TaskCard/TaskCard";


class TaskList extends Component {
    state = {
        tasks: [],
    };

    componentDidMount(){
        fetch(TASKS_URL)
            .then(response => response.json())
            .then(json => {return json})
            .then(tasks => this.setState({tasks}))
            .catch(error => console.log(error))
    }

    render(){
        return <Fragment>
            {this.state.tasks.map(task => {
                return <div>
                    <TaskCard task={task} key={task.id}/>
                </div>
            })}
        </Fragment>
    }
}

export default TaskList;