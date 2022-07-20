import classnames from 'classnames'

import styles from './Button.module.css'

interface ButtonProps extends React.ComponentProps<'button'> {
  color: 'blue' | 'green'
}
const Button = ({ color, className, children, ...props }: ButtonProps) => {
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
