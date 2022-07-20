import Values from '../../redux/features/draw/models/Values'
import AddValueForm from './AddValueForm/AddValueForm'
import ListValuesConnect from './ListValues/ListValues.connect'
import SubmitValuesConnect from './SubmitValues/SubmitValues.connect'

interface CreateDrawUIProps {
  values: Values
}
const CreateDrawUI = ({ values }: CreateDrawUIProps) => (
  <>
    <AddValueForm />
    {values.length > 100 ? <SubmitValuesConnect /> : null}
    <ListValuesConnect />
    <SubmitValuesConnect />
  </>
)

export default CreateDrawUI
