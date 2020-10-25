import styles from './A.module.css'
import classnames from 'classnames'
import Link from 'next/link'

interface Props extends React.ComponentProps<'a'> {
  href: string
  as?: string
}
const A: React.FC<Props> = ({ className, children, href, as, ...props }) => {
  return (
    <Link href={href} as={as}>
      <a className={classnames(styles.link, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}
export default A
