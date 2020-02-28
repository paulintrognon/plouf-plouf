import DrawResult from './DrawResult'
import { connect } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import * as drawActions from '../../redux/features/draw/actions'
import * as animationActions from '../../redux/features/animation/actions'

interface OwnProps {
  slug: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  draw: state.draw,
  animation: state.animation,
  slug: ownProps.slug,
})

const dispatchProps = {
  handleLoadFromSlug: drawActions.loadFromSlug,
  handleStartAnimation: animationActions.start,
}

export default connect(mapStateToProps, dispatchProps)(DrawResult)
