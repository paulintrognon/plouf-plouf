import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import { drawValue } from '../../../redux/features/draw/actions'
import { reset, backToValuesForm } from '../../../redux/common/actions'

const dispatchProps = {
  handleOtherResult: drawValue,
  handleReset: reset,
  handleBack: backToValuesForm,
}

export default connect(null, dispatchProps)(ActionButtons)
