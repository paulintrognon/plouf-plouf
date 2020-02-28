import { connect } from 'react-redux'
import Header from './Header'
import { RootState } from '../../../redux/rootReducer'

const mapStateToProps = (state: RootState) => ({
  animation: state.animation,
})

export default connect(mapStateToProps)(Header)
