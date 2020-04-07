import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceTask, IStore } from '../../models';
import {
    taskClear,
    taskCreate,
    taskDelete,
    taskUpdate,
} from '../../redux/actions';
import { Homepage } from './Homepage';

const mapStateToProps = (state: IStore) => ({
    tasks: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
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
