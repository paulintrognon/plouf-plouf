import AddValueForm from './AddValueForm'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/features/draw/actions'

const dispatchProps = {
  onAddValue: valuesActions.addValue,
  onStartDraw: valuesActions.drawValue,
}

export default connect(null, dispatchProps)(AddValueForm)
