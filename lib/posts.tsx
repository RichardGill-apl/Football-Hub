import path from 'path'
import { client } from '../lib/graphql'
import {
  useQuery,
  gql
} from "@apollo/client";

const GET_POSTS = gql`
	query GetPosts {
	  posts (first: 50) {
	    nodes {
	      id
	      slug
	      title
	      date
	      databaseId
	      excerpt
	    }
	  }
	}
`;

export function PostList() {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <p>Loading...</p>;
	if (error) {
	  console.log("ERROR:", error);
	  return <p>There was an error fetching articles, please try again.</p>;
	}

	return data.posts.nodes.map(({ id, title, date, slug, excerpt }: {id:number, title:string, date:string, slug:string, excerpt:string}) => (
	  <div key={id}>
	  	<h3>{title}</h3>
	  	<p>{new Date(date).toLocaleDateString()}</p>
	  	<div dangerouslySetInnerHTML={{__html: excerpt}}></div>
	    <p>
	       	<a href={`/articles/${slug}`}><i>Read more {'>'}</i></a>
	    </p>
	  </div>
	));
}

export async function getRecentPostPaths() {
	const { loading, error, data } = await client.query({query: GET_POSTS});

	return data.posts.nodes.map(({ id, slug }: {id:number, slug:string}) => {
	  return {
	      params: {
	      	id,
	        slug
	      }
	    }
	});
}

export async function getPostData(slug:string) {
	const { loading, error, data } = await client.query({query: gql	`
		query GetPostBySlug {
		  post(id: "${slug}", idType: SLUG) {
		    id
		    databaseId
		    title
		    uri
		    content
		    excerpt
		  }
		}
		`, 
		fetchPolicy: 'no-cache'});

	if (!data.post) {
		return {
		notFound: true,
		}
	}

  return {
    ...data.post
  }
}