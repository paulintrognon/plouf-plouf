import { useRef, useState } from 'react'
import Button from '../../../Shared/Button/Button'
import styles from './AddValueInput.module.css'

interface Props {
  startDrawAction: () => void
  addValueAction: (value: string) => void
}
const AddValueInput: React.FC<Props> = ({ startDrawAction, addValueAction }) => {
  /**
   * State of new value being entered
   */
  const [enteredText, setEnteredText] = useState('')

  /**
   * Input element in which the user is typing the new value
   */
  const inputElement = useRef<HTMLInputElement>(null)

  /**
   * Updates enteredText state on input
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredText(event.target.value)
  }

  /**
   * Trims a given value then adds it to the draw
   */
  const addValueToDraw = (value: string): void => {
    const trimmedValue = value.trim()
    if (!trimmedValue.length) {
      return
    }
    addValueAction(trimmedValue)
  }

  /**
   * On "Enter" key pressed:
   * - If no value is being entered, starts the draw.
   * - If a new value is being entered, adds the new value to the draw.
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // If the key pressed is not "Enter", we stop here
    if (event.key !== 'Enter') {
      return
    }
    // If no value is being entered, starts the draw
    if (!enteredText) {
      startDrawAction()
      return
    }
    // Else, if a new value is being entered, adds the new value to the draw.
    addValueToDraw(enteredText)
    // Resets the entered text
    setEnteredText('')
  }

  /**
   * On "Add" button pressed:
   * Adds the entered value to the draw, the resets and focus the input
   */
  const handleAdd = (): void => {
    addValueToDraw(enteredText)
    setEnteredText('')
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }

  return (
    <p className={styles.container}>
      <input
        data-cy="AddValueForm_textInput"
        type="text"
        className={styles.textInput}
        ref={inputElement}
        placeholder="Ex: Paul [↵] Margot [↵]"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        value={enteredText}
        title="Entrez ici un mot ou un nom à tirer au sort."
      />
      <Button
        color="blue"
        data-cy="AddValueForm_addInput"
        className={styles.addInput}
        onClick={handleAdd}
        title="Cliquez ici pour ajouter une valeur à la liste"
      >
        <i className="fa fa-plus" aria-hidden="true" />
      </Button>
    </p>
  )
}
export default AddValueInput
