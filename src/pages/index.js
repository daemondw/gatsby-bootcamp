import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

const HomePage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Dmytro, a full-stack developer living in beautiful Vienna.</h2>
        <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
      </Layout>
    </div>
  )
}
export default HomePage