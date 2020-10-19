import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import { drawValue } from '../../../redux/features/draw/actions'
import { backToValuesForm } from '../../../redux/common/actions'

const dispatchProps = {
  handleOtherResult: drawValue,
  handleBack: backToValuesForm,
}

export default connect(null, dispatchProps)(ActionButtons)
