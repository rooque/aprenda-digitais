import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Inicial from '../components/Inicial';
//import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    state : state
  };
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}*/

export default connect()(Inicial);
