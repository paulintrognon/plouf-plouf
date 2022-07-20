import classnames from 'classnames'
import Link from 'next/link'

import styles from './A.module.css'

interface AProps extends React.ComponentProps<'a'> {
  href: string
  as?: string
}
const A = ({ className, children, href, as, ...props }: AProps) => {
  return (
    <Link href={href} as={as}>
      <a className={classnames(styles.link, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}
export default A
