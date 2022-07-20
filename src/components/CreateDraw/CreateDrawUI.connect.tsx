import { connect } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import CreateDrawUI from './CreateDrawUI'

const mapStateToProps = (state: RootState) => ({
  values: state.draw.draw.values,
})

export default connect(mapStateToProps)(CreateDrawUI)
