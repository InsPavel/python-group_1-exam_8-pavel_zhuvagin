import React, {Component} from 'react';
import Select from 'react-select';
import {TASKS_URL} from "../../api-urls";

const options = [
  { value: 'turn', label: 'Turn' },
  { value: 'in_work', label: 'In_work' },
  { value: 'done', label: 'Done' }
];

class TaskDetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.task = this.props.task;
    }

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
        const id = this.state.task.id;
        const data = JSON.stringify(this.state.task);
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        fetch(TASKS_URL + id + '/' ,{method: 'PUT', body: data, headers})
            .then(response => window.history.back())
            .catch(error => {
                console.log(error);
            })
    };



    render(){
        const {summary, description, due_date, time_planned} = this.state.task;
        return <div>
            <form onSubmit={this.formSubmitted}>
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
                        <label className="font-weight-bold">Статус</label>
                        <Select options={options}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Планируемое время</label>
                        <input type="text" className="form-control" name="time_planned" value={time_planned} onChange={this.inputChanged}/>
                    </div>
                <button type='submit' className='btn btn-primary'>Сохранить</button>
                <button type='submit' className='btn btn-primary'>Отменить</button>
                 </form>
            </div>
    }
}

export default TaskDetailCard;