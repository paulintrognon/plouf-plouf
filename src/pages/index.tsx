import BulkAddLink from '../components/BulkAddLink/BulkAddLink'
import CreateDrawUI from '../components/CreateDraw/CreateDrawUI.connect'
import Layout from '../components/Layout/Layout'

const Homepage = () => (
  <Layout>
    <CreateDrawUI />
    <BulkAddLink />
  </Layout>
)

export default Homepage
