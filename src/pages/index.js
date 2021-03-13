import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/historie.scss"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    <h1>Hej</h1>
    {/* {console.log(edges.page.node[0].component)}
    {console.log(edges.page.node[0].context.data.title)} */}
    {/* {console.log(edges.page[0].node[0])} */}
    {/* <h1>Page: {edges[0].node.path}</h1> */}
    {console.log("All historyPagesQuery:", allHistoryPagesQuery)}
    {edges.map(page => (
      <>
        <div className="history-container" key={page.node.context.data.title}>
          <h1>{page.node.context.data.title}</h1>

          <img
            src={page.node.context.data.image.url}
            alt={page.node.context.data.title}
          />
          <button className="btn btn-blue">
            <Link className="link" key={page.node.path} to={page.node.path}>
              Zobacz
            </Link>
          </button>
        </div>
      </>
    ))}
  </Layout>
)

export const allHistoryPagesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "C:/Users/Adam/Desktop/Projekty/motivational-blog/src/templates/historyTemplate.js"
        }
      }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              title
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
