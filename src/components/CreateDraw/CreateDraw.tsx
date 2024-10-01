import { useSelector } from 'react-redux'

import AddValueForm from './AddValueForm/AddValueForm'
import ListValues from './ListValues/ListValues'
import SubmitValues from './SubmitValues/SubmitValues'
import { RootState } from '../../store/store'

const CreateDraw = () => {
  const values = useSelector((state: RootState) => state.draw.draw.values)
  return (
    <>
      <AddValueForm />
      {values.length > 50 ? <SubmitValues /> : null}
      <ListValues />
      <SubmitValues />
    </>
  )
}

export default CreateDraw
