import React, {Component} from 'react'
import {TASKS_URL} from "../../api-urls";

class TaskAdd extends Component{
    state = {
        task: {
            summary: '',
            description: '',
            due_date: '',
            time_planned: '',
        }
    };

    updateTaskState = (fieldName, value) => {
       this.setState(prevState => {
            let newState = {...prevState};
            let task = {...prevState.task};
            task[fieldName] = value;
            newState.task = task;
            return newState;
        })
    };

    inputChanged = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        this.updateTaskState(fieldName, value)
    };

    formSubmitted = (event) => {
        event.preventDefault();
        console.log(this.state);
        const data = JSON.stringify(this.state.task);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Content-Length': data.length
        });

        fetch(TASKS_URL, {method: 'POST', body: data, headers})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            })
            .then(task => this.setState(prevState => {
                this.props.history.replace('/tasks/');
            }))
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const {summary, description, due_date, time_planned} = this.state.task;
        return  <form onSubmit={this.formSubmitted}>
                <div className="form-group">
                    <label className="font-weight-bold">Описание</label>
                    <input type="text" className="form-control" name='summary' value={summary} onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Полное описание</label>
                    <input type="text" className="form-control" name='description' value={description} onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Срок выполнения</label>
                    <input type="text" className="form-control" name="due_date" value={due_date} onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Планируемое время</label>
                    <input type="text" className="form-control" name="time_planned" value={time_planned} onChange={this.inputChanged}/>
                </div>
            <button disabled={this.state.submitDisabled} type='submit' className='btn btn-primary'>Сохранить</button>
        </form>
            }
        }

export default TaskAdd;