import { connect } from 'react-redux';
import action from '../../../../actions/user';
import UserPresentational from '../presentation/user';

const mapStateToProps = (state) => ({
  user: state.sample.user,
});

const mapDispatchToProps = (dispatch) => ({

});

const User = connect(mapStateToProps, mapDispatchToProps)(UserPresentational);

export default User;
