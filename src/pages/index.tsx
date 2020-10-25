import { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import BulkAddLink from '../components/BulkAddLink/BulkAddLink'
import CreateDrawUI from '../components/CreateDraw/CreateDrawUI'

const Homepage: NextPage = () => (
  <Layout>
    <CreateDrawUI />
    <BulkAddLink />
  </Layout>
)

export default Homepage
