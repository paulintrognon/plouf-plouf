import classnames from 'classnames'
import styles from './Button.module.css'

interface Props extends React.ComponentProps<'button'> {
  color: 'blue' | 'green'
}
const Button: React.FC<Props> = ({ color, className, children, ...props }) => {
  return (
    <button
      className={classnames(styles.button, className, {
        [styles.blue]: color === 'blue',
        [styles.green]: color === 'green',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
