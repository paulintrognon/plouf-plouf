import AddValueForm from './AddValueForm'
import { connect } from 'react-redux'
import * as valuesActions from '../../actions/valuesActions'

const dispatchProps = {
  onAddValue: valuesActions.add,
  onStartDraw: () => null,
}

export default connect(null, dispatchProps)(AddValueForm)
