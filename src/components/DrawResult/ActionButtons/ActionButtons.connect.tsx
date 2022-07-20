import { connect } from 'react-redux'

import { backToValuesForm } from '../../../redux/common/actions'
import { drawValue, removeValue } from '../../../redux/features/draw/actions'
import { RootState } from '../../../redux/rootReducer'
import ActionButtons from './ActionButtons'

interface OwnProps {
  hidden: boolean
  slug: string
}
const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  draw: state.draw,
  slug: ownProps.slug,
  hidden: ownProps.hidden,
})

const dispatchProps = {
  handleOtherResult: drawValue,
  handleBack: backToValuesForm,
  removeValueAction: removeValue,
}

export default connect(mapStateToProps, dispatchProps)(ActionButtons)
