import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import { drawValue } from '../../../redux/features/draw/actions'

const dispatchProps = {
  handleOtherResult: drawValue,
}

export default connect(null, dispatchProps)(ActionButtons)
