import AddValueInput from './AddValueInput'
import { connect } from 'react-redux'
import * as valuesActions from '../../../../redux/features/draw/actions'

const dispatchProps = {
  addValueAction: valuesActions.addValue,
  startDrawAction: valuesActions.drawValue,
}

export default connect(null, dispatchProps)(AddValueInput)
