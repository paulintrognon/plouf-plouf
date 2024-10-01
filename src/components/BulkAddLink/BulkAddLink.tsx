import styles from './BulkAddLink.module.css'
import A from '../Shared/A/A'

const BulkAddLink = () => {
  return (
    <div className={styles.container}>
      <p>ou</p>
      <p>
        <A href="/import" data-cy="BulkAddLink">
          Importer une liste
        </A>
      </p>
    </div>
  )
}
export default BulkAddLink
