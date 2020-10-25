import AddValueForm from './AddValueForm/AddValueForm'
import ListValuesConnect from './ListValues/ListValues.connect'
import SubmitValuesConnect from './SubmitValues/SubmitValues.connect'

const CreateDrawUI: React.FC = () => (
  <>
    <AddValueForm />
    <ListValuesConnect />
    <SubmitValuesConnect />
  </>
)

export default CreateDrawUI
