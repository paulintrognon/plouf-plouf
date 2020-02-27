import DrawResult from './DrawResult'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reducers'
import * as drawActions from '../../redux/actions/drawActions'

interface OwnProps {
  slug: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  draw: state.draw.draw,
  animation: state.draw.animation,
  slug: ownProps.slug,
})

const dispatchProps = {
  handleLoadFromSlug: drawActions.loadFromSlug,
  handleStartAnimation: drawActions.startAnimation,
}

export default connect(mapStateToProps, dispatchProps)(DrawResult)
