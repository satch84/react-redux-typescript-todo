import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceTask, IStore } from '../../models';
import {
    checkTaskCreate,
    checkTaskDelete,
    checkTaskUpdate,
    hideModal,
    taskClear,
    taskUpdate,
} from '../../redux/actions';
import { Homepage } from './Homepage';

const mapStateToProps = (state: IStore) => ({
    isModalOpened: state.modal.isModalOpened,
    modalType: state.modal.modalType,
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    hideModal: () => dispatch(hideModal()),
    checkTaskUpdate: (uuid: string, status: string) => dispatch(checkTaskUpdate(uuid, status)),
    checkTaskDelete: (uuid: string) => dispatch(checkTaskDelete(uuid)),
    checkTaskCreate: (taskList: InterfaceTask[], value: string) => dispatch(checkTaskCreate(taskList, value)),
    taskUpdate: (uuid: string, status: string) => dispatch(taskUpdate(uuid, status)),
    taskClear: () => dispatch(taskClear()),
});

const ConnectedHomepage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);

export { ConnectedHomepage as Homepage };
