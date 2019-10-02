import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props

        return (
            <Layout location={this.props.location} title="UTC Test Form">
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field half">
                        <label htmlFor="permit">Drivers Permit</label>
                        <input type="file" name="permit" id="permit" />
                    </div>
                    <div className="field half">
                        <label htmlFor="pass">Passport</label>
                        <input type="file" name="pass" id="pass" />
                    </div>
                    <div className="field half">
                        <input type="submit" value="Send Message" className="special" />
                    </div>
                    <div className="field half">
                        <input type="reset" value="Clear" />
                    </div>
                </form>
            </Layout>
        )
    }
}

export default BlogIndex
