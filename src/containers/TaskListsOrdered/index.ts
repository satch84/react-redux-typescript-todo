import { connect } from 'react-redux';
import { IStore } from '../../models';
import { getAllTasks, getDoneTasks, getInProgressTasks, getToDoTasks } from '../../redux/tools';
import { TaskListsOrdered } from './TaskListsOrdered';

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
