import Home from 'src/pages/home'

export default function Index(props) {
  const { posts } = props;
  return (
    <Home data={posts} />
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/list?perPage=8&page=1`)
  const posts = await res.json()

  return {
    props: { 
      posts,
    },
    revalidate: 60,
  };
}