import { connect } from 'react-redux'
import Header from './Header'
import { RootState } from '../../../redux/rootReducer'
import { reset } from '../../../redux/common/actions'

const mapStateToProps = (state: RootState) => ({
  animation: state.animation,
})

const dispatchProps = {
  handleReset: reset,
}

export default connect(mapStateToProps, dispatchProps)(Header)
