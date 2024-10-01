import styles from './AddValueForm.module.css'
import AddValueInput from './AddValueInput/AddValueInput'

const AddValueForm = () => {
  return (
    <div className={styles.container}>
      <p className={styles.explanations1}>
        Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur &quot;Tirer au sort&quot;..
      </p>
      <AddValueInput />
      <p className={styles.explanations2}>
        (pour ajouter un élément, inscrivez-le ci-dessus puis cliquez sur le bouton [+] ou sur la
        touche Entrée)
      </p>
    </div>
  )
}
export default AddValueForm
