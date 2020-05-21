import { connect } from 'react-redux';
import { IStore } from '../../models';
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

const mapDispatchToProps = {
    cancelModal,
    confirmModal,
    checkTaskUpdate,
    checkTaskDelete,
    checkTaskCreate,
    checkTaskClear,
};

const ConnectedHomepage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);

export { ConnectedHomepage as Homepage };
