import Link from 'next/link'
import styles from './BulkAddLink.module.css'

const BulkAddLink: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>ou</p>
      <p>
        <Link href="/import">
          <a className={styles.link}>Importer une liste</a>
        </Link>
      </p>
    </div>
  )
}
export default BulkAddLink
