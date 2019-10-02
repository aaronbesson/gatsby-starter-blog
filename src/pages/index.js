import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <form name="contact" method="post" netlify-honeypot="b" autocomplete="off" data-netlify data-secure>
  <p>
    <label for="name">Basic Field</label>
    <input type="text" data-secure-field name="name" id="name" />
  </p>
       <p>
    <label>Email: <input type="text" data-secure-field name="email" /></label>
  </p>
    <p>
    <label>Drivers Permit: <input type="file" data-secure-field name="fileToUpload_permit" id="fileToUpload_permit" type="file" /></label>
  </p>   
    <p>
    <label>Passport Permit: <input type="file" data-secure-field name="fileToUpload_pass" id="fileToUpload_pass" type="file" /></label>
  </p>
      <p>
    <label>Utility Bill: <input type="file" data-secure-field name="fileToUpload_bill" id="fileToUpload_bill" type="file" /></label>
  </p>
      <input type="hidden" name="form-name" value="contact" />
  <p>
    <button type="submit" id="submit">Send</button>
  </p>
</form>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
