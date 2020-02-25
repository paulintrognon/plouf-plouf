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
    let nextValue: string = value

    const i = value.indexOf(',')
    if (i !== -1) {
      this.sendValue(value.slice(0, i))
      nextValue = ''
    }

    this.setState({ text: nextValue })
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
    this.textInput.current.focus()
  }

  sendValue = (value: string) => {
    const trimedValue = value.trim()
    if (!trimedValue.length) {
      return
    }
    this.props.onAddValue(trimedValue)
  }

  render() {
    return (
      <div className={styles.main}>
        <p className={styles.explanations1}>
          Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur &quot;Tirer au sort&quot;..
        </p>
        <p className={styles.inputContainer}>
          <input
            type="text"
            className={styles.textInput}
            autoFocus
            ref={this.textInput}
            placeholder="Ex: Pierre, Paul, Jacques [↵]"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.text}
          />
          <button className={styles.addInput} onClick={this.handleAdd}>
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
        </p>
        <p className={styles.explanations2}>
          (pour ajouter un élément, inscrivez le puis cliquez sur le bouton [+] ou sur la touche Entrée)
        </p>
      </div>
    )
  }
}
export default AddValueForm
