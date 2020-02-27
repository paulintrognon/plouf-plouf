import SubmitValues from './SubmitValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/actions/valuesActions'
import { RootState } from '../../redux/reducers'

const mapStateToProps = (state: RootState) => ({
  values: state.values,
})

const dispatchProps = {
  onSubmit: valuesActions.submit,
}

export default connect(mapStateToProps, dispatchProps)(SubmitValues)
