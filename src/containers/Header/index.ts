import { connect } from 'react-redux';
import { IStore } from '../../models';
import { selectLanguage } from '../../redux/actions';
import { Header } from './Header';

const mapStateToProps = (state: IStore) => ({
    language: state.language,
});

const mapDispatchToProps = { selectLanguage };

const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export { ConnectedHeader as Header };
