import React from 'react'
import Layout from '../components/Layout/Layout'
import ConnectedSubmitValues from '../components/SubmitValues/ConnectedSubmitValues'
import ConnectedAddValueForm from '../components/AddValueForm/ConnectedAddValueForm'
import ConnectedListValues from '../components/ListValues/ConnectedListValues'

const Homepage = () => (
  <Layout>
    <ConnectedAddValueForm />
    <ConnectedListValues />
    <ConnectedSubmitValues />
  </Layout>
)

export default Homepage
