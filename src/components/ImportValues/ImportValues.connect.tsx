/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ImportValues from './ImportValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../redux/features/draw/actions'
import { RootState } from '../../redux/rootReducer'

const mapStateToProps = (state: RootState) => ({
  values: state.draw.draw.values,
})

const dispatchProps = {
  importValuesAction: valuesActions.importValues,
}

export default connect(mapStateToProps, dispatchProps)(ImportValues)
