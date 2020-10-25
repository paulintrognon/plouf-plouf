import { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import ImportValues from '../components/ImportValues/ImportValues.connect'

const ImportPage: NextPage = () => (
  <Layout>
    <ImportValues />
  </Layout>
)

export default ImportPage
