import A from '../Shared/A/A'
import styles from './BulkAddLink.module.css'

const BulkAddLink: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>ou</p>
      <p>
        <A href="/import" data-cy="BulkAddLink" style={{ color: 'blue' }}>
          Importer une liste
        </A>
      </p>
    </div>
  )
}
export default BulkAddLink
