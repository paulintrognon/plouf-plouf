import classnames from 'classnames'
import styles from './Button.module.css'

interface Props extends React.ComponentProps<'a'> {
  color: 'blue' | 'green'
}
const ButtonLink: React.FC<Props> = ({ color, className, children, ...props }) => {
  return (
    <a
      className={classnames(styles.button, className, {
        '-blue': color === 'blue',
        '-green': color === 'green',
      })}
      {...props}
    >
      {children}
    </a>
  )
}
export default ButtonLink
