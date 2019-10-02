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
        <SEO title="All posts" />
   <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
   <p>
    <label>Drivers Permit: <input type="file" name="fileToUpload_permit" id="fileToUpload_permit" type="file" /></label>
  </p>   
    <p>
    <label>Passport Permit: <input type="file" name="fileToUpload_pass" id="fileToUpload_pass" type="file" /></label>
  </p>
      <p>
    <label>Utility Bill: <input type="file" name="fileToUpload_bill" id="fileToUpload_bill" type="file" /></label>
  </p> 
  <p>
    <button type="submit">Submit</button>
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
