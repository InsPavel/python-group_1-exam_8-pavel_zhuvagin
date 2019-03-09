import React, {Fragment, Component} from 'react'
import {TASKS_URL} from "../../api-urls";
import TaskDetailCard from "../../components/TaskDetailCard/TaskDetailCard";

class TaskDetail extends Component {
    state = {
        task: null
    };

    componentDidMount() {
        const match = this.props.match;

        fetch(TASKS_URL + match.params.id)
            .then(response => response.json())
            .then(json => {console.log(json);return json })
            .then(task => this.setState({task}))
            .catch(error => console.log(error))
    }

    render() {
        return <Fragment>
            {this.state.task ? <TaskDetailCard task={this.state.task}/> : null}
        </Fragment>
    }
}

export default TaskDetail;