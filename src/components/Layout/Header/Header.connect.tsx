import { connect } from 'react-redux'

import { RootState } from '../../../redux/rootReducer'
import Header from './Header'

const mapStateToProps = (state: RootState) => ({
  animation: state.animation,
})

export default connect(mapStateToProps)(Header)
