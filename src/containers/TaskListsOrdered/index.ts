import { IStore } from '../../models';
import { connect } from 'react-redux';
import { TaskListsOrdered } from './TaskListsOrdered';
import { getAllTasks, getDoneTasks, getInProgressTasks, getToDoTasks } from '../../redux/tools';

const mapStateToProps = (state: IStore) => ({
    tasks: state.tasks,
    allTasksList: getAllTasks(state),
    doneTasksList: getDoneTasks(state),
    todoTasksList: getToDoTasks(state),
    inProgressTasksList: getInProgressTasks(state),
});

const ConnectedTaskListsOrdered = connect(
    mapStateToProps,
)(TaskListsOrdered);

export { ConnectedTaskListsOrdered as TaskListsOrdered };
