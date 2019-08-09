import { connect } from 'react-redux';
import { InterfaceTask, IStore } from '../../models';
import {
    taskClear,
    taskCreate,
    taskDelete,
    taskUpdate,
} from '../../redux/actions';
import { Homepage } from './Homepage';

const mapStateToProps = (state: IStore) => ({
    isLoading: state.isLoading,
    tasks: state.tasks,
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
