import React, {Fragment, Component} from 'react'
import axios from 'axios';
import './TaskList.css'
import {TASKS_URL} from "../../api-urls";
import TaskCard from "../../components/TaskCard/TaskCard";
import {NavLink} from "react-router-dom";


class TaskList extends Component {
    state = {
        tasks: [],
        turn: [],
        in_work: [],
        done: [],
    };

    componentDidMount(){
        let arr_turn =[];
        let arr_in_work =[];
        let arr_done = [];
        axios.get(TASKS_URL)
            .then(response => {
                this.setState({
                    tasks: response.data
                });
                this.state.tasks.map(task => {
                   if(task.status === 'turn'){
                       arr_turn.push(task);
                       this.setState({
                       turn: arr_turn
                    })
                   }
                   else if(task.status === 'in_work'){
                       arr_in_work.push(task);
                       this.setState({
                       in_work: arr_in_work
                    })
                   }
                   else if(task.status === 'done'){
                        arr_done.push(task);
                       this.setState({
                       in_work: arr_done
                    })
                   }
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return <Fragment>
            <p><NavLink to={'/tasks/add'}>Добавить задачу</NavLink></p>
            <div className='row'>
                <div className='col col-4'>
                    <h3>Очередь</h3>
                    {this.state.turn.map(task => {
                    return <div>
                        <TaskCard task={task} key={task.id}/>
                    </div>
                    })}
                </div>
                <div className='col col-4'>
                    <h3>В работе</h3>
                    {this.state.in_work.map(task => {
                        return <div>
                            <TaskCard task={task} key={task.id}/>
                        </div>
                    })}
                </div>
                <div className='col col-4'>
                    <h3>Сделано</h3>
                    {this.state.done.map(task => {
                    return <div>
                        <TaskCard task={task} key={task.id}/>
                    </div>
                    })}
                </div>
            </div>
        </Fragment>
    }
}

export default TaskList;