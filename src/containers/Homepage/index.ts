import { IStore } from '../../models';
import { connect } from 'react-redux';
import {
    taskCreate,
    taskDelete,
    taskUpdate,
    taskClear,
} from '../../redux/actions';
import { Homepage } from './Homepage';
import { InterfaceTask } from '../../models';
import { getAllTasks, getDoneTasks, getInProgressTasks, getToDoTasks } from '../../redux/tools';

const mapStateToProps = (state: IStore) => ({
    isLoading: state.isLoading,
    tasks: state.tasks,
    allTasksList: getAllTasks(state),
    doneTasksList: getDoneTasks(state),
    todoTasksList: getToDoTasks(state),
    inProgressTasksList: getInProgressTasks(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    taskCreate: (task: InterfaceTask) => dispatch(taskCreate(task)),
    taskDelete: (uuid: string) => dispatch(taskDelete(uuid)),
    taskUpdate: (uuid: string, status: string) => dispatch(taskUpdate(uuid, status)),
    taskClear: () => dispatch(taskClear()),
});

const ConnectedHomepage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);

export { ConnectedHomepage as Homepage };
