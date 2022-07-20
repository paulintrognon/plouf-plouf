import { connect } from 'react-redux'

import * as valuesActions from '../../../redux/features/draw/actions'
import { RootState } from '../../../redux/rootReducer'
import SubmitValues from './SubmitValues'

const mapStateToProps = (state: RootState) => ({
  values: state.draw.draw.values,
})

const dispatchProps = {
  onSubmit: valuesActions.drawValue,
}

export default connect(mapStateToProps, dispatchProps)(SubmitValues)
