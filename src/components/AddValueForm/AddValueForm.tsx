import React from 'react'
import styles from './AddValueForm.module.css'

type Props = {
  onStartDraw: () => void
  onAddValue: (value: string) => void
}

type State = {
  text: string
}

class AddValueForm extends React.Component<Props, State> {
  readonly state: State = {
    text: '',
  }

  textInput: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value
    this.setState({ text: value })
  }

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }
    if (!this.state.text) {
      this.props.onStartDraw()
      return
    }
    this.sendValue(this.state.text)
    this.setState({ text: '' })
  }

  handleAdd = () => {
    this.sendValue(this.state.text)
    this.setState({ text: '' })
    if (this.textInput.current) {
      this.textInput.current.focus()
    }
  }

  sendValue = (value: string) => {
    const trimmedValue = value.trim()
    if (!trimmedValue.length) {
      return
    }
    this.props.onAddValue(trimmedValue)
  }

  render() {
    return (
      <div className={styles.main}>
        <p className={styles.explanations1}>
          Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur &quot;Tirer au sort&quot;..
        </p>
        <p className={styles.inputContainer}>
          <input
            data-cy="AddValueForm_textInput"
            type="text"
            className={styles.textInput}
            autoFocus
            ref={this.textInput}
            placeholder="Ex: Paul [↵] Margot [↵]"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.text}
            title="Entrez ici un mot ou un nom à tirer au sort."
          />
          <button
            data-cy="AddValueForm_addInput"
            className={styles.addInput}
            onClick={this.handleAdd}
            title="Cliquez ici pour ajouter une valeur à la liste"
          >
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
        </p>
        <p className={styles.explanations2}>
          (pour ajouter un élément, inscrivez-le ci-dessus puis cliquez sur le bouton [+] ou sur la
          touche Entrée)
        </p>
      </div>
    )
  }
}
export default AddValueForm
