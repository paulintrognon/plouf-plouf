/* eslint-disable @typescript-eslint/explicit-function-return-type */
import CreateDrawUI from './CreateDrawUI'
import { connect } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

const mapStateToProps = (state: RootState) => ({
  values: state.draw.draw.values,
})

export default connect(mapStateToProps)(CreateDrawUI)
