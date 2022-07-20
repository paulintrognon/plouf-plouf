import { connect } from 'react-redux'

import * as animationActions from '../../redux/features/animation/actions'
import * as drawActions from '../../redux/features/draw/actions'
import { RootState } from '../../redux/rootReducer'
import DrawResult from './DrawResult'

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
