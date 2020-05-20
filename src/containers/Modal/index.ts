import { connect } from 'react-redux';
import { IStore } from '../../models';
import { Modal } from './Modal';

const mapStateToProps = (state: IStore) => ({
    /** this is here only for further use */
    tasks: state.tasks,
});

const ConnectedModal = connect(
    mapStateToProps,
)(Modal);

export { ConnectedModal as Modal };
