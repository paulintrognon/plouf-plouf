import React from 'react'
import Layout from '../components/Layout/Layout'
import SubmitValues from '../components/SubmitValues/SubmitValues.connect'
import AddValueForm from '../components/AddValueForm/AddValueForm'
import ListValues from '../components/ListValues/ListValues.connect'

const Homepage: React.FunctionComponent = () => (
  <Layout>
    <AddValueForm />
    <ListValues />
    <SubmitValues />
  </Layout>
)

export default Homepage
