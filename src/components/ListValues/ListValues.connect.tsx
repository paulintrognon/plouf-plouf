import ListValues from './ListValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/features/draw/actions'
import { RootState } from '../../redux/rootReducer'

const mapStateToProps = (state: RootState) => ({
  values: state.draw.draw.values,
})

const dispatchProps = {
  onRemove: valuesActions.removeValue,
}

export default connect(mapStateToProps, dispatchProps)(ListValues)
