import Head from 'next/head'
import Error from 'next/error'
import Layout from '../../components/layout'
import { getRecentPostPaths, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = await getRecentPostPaths()
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params } : { params:any }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    },
    revalidate: 60,
  }
}

export default function Post({ postData } : { postData:any }) {
  return (
  	(postData.notFound) ?
  	<Layout>
  		<Head>
        	<title>Page not found</title>
      	</Head>
       	<a href={`/`}><i>{'<'} Home</i></a>
    	<Error statusCode={404} title="The article you are trying to view was not found" />
    </Layout>
    :
    <Layout>
    	<Head>
        	<title>{postData.title}</title>
    		<meta name="description" content={postData.excerpt} />
      	</Head>
       	<a href={`/`}><i>{'<'} Back</i></a>
    	<h1>{postData.title}</h1>
    	<div dangerouslySetInnerHTML={{__html: postData.content}}></div>
    </Layout>
  )
}