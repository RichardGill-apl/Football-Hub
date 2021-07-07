import Head from 'next/head'
import Link from 'next/link'
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
    revalidate: 120,
  }
}

export default function Post({ postData } : { postData:any }) {
  return (
  	(postData.notFound) ?
  	<Layout>
  		<Link href={`/`}>
       		<a><i>{'<'} Back</i></a>
   		</Link>
    	<p>The article does not exist</p>
    </Layout>
    :
    <Layout>
    	<Link href={`/`}>
       		<a><i>{'<'} Back</i></a>
   		</Link>
    	<h1>{postData.title}</h1>
    	<div dangerouslySetInnerHTML={{__html: postData.content}}></div>
    </Layout>
  )
}