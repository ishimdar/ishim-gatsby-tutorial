import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page Not found</h3>
        </section>
      </main>      
    </Layout>
  )
}

export default Error

export const Head = () => <title>Not found</title>
