import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import PostImage from 'gatsby-image'
import Button from '@material-ui/core/Button';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
     <Layout>
      <div>
      <PostImage fixed={post.frontmatter.thumbnail.childImageSharp.fixed} alt="A Cool Dinner" title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </Layout>   
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        thumbnail{
          childImageSharp {
            fixed(width: 980) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`