import React from 'react'
import styles from './Value.module.css'

type Props = {
  value: string
  index: number
  onRemove: (index: number) => void
}

class Value extends React.Component<Props> {
  handleRemove = (): void => {
    this.props.onRemove(this.props.index)
  }

  render(): React.ReactNode {
    return (
      <div className={styles.value}>
        <span className={styles.text}>{this.props.value}</span>
        <span className={styles.cross} onClick={this.handleRemove}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    )
  }
}

export default Value
