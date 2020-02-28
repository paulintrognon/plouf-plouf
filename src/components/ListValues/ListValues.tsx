import React from 'react'
import Value from '../Value/Value'
import styles from './ListValues.module.css'
import Values from '../../redux/features/draw/models/Values'

type Props = {
  values: Values
  onRemove: (index: number) => void
}

class ListValues extends React.Component<Props, {}> {
  handleRemove = (i: number): void => {
    this.props.onRemove(i)
  }

  render(): React.ReactNode {
    const values = this.props.values
    return (
      <div className={styles.list}>
        {values.map((value, index) => (
          <Value key={index} index={index} value={value} onRemove={this.handleRemove}></Value>
        ))}
      </div>
    )
  }
}

export default ListValues
