import AddValueForm from './AddValueForm'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/actions/valuesActions'

const dispatchProps = {
  onAddValue: valuesActions.add,
  onStartDraw: valuesActions.submit,
}

export default connect(null, dispatchProps)(AddValueForm)
