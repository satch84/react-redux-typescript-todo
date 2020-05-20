import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InterfaceTask, IStore } from '../../models';
import {
    cancelModal,
    checkTaskClear,
    checkTaskCreate,
    checkTaskDelete,
    checkTaskUpdate,
    confirmModal,
} from '../../redux/actions';
import { Homepage } from './Homepage';

const mapStateToProps = (state: IStore) => ({
    isModalOpened: state.modal.isModalOpened,
    modalType: state.modal.modalType,
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    cancelModal: () => dispatch(cancelModal()),
    confirmModal: () => dispatch(confirmModal()),
    checkTaskUpdate: (uuid: string, status: string) => dispatch(checkTaskUpdate(uuid, status)),
    checkTaskDelete: (uuid: string) => dispatch(checkTaskDelete(uuid)),
    checkTaskCreate: (taskList: InterfaceTask[], value: string) => dispatch(checkTaskCreate(taskList, value)),
    checkTaskClear: () => dispatch(checkTaskClear()),
});

const ConnectedHomepage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);

export { ConnectedHomepage as Homepage };
