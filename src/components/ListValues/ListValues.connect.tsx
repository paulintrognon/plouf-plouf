import ListValues from './ListValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/actions/valuesActions'
import { RootState } from '../../redux/reducers'

const mapStateToProps = (state: RootState) => ({
  values: state.values,
})

const dispatchProps = {
  onRemove: valuesActions.remove,
}

export default connect(mapStateToProps, dispatchProps)(ListValues)
