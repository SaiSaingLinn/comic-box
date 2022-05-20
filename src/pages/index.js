import Home from 'src/pages/home'

export default function Index(props) {
  console.log('props', props)
  return (
    <Home />
  )
}

export async function getStaticProps() {

  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/books/list?perPage=8&page=1`)
  const posts = await res.json()
  // const category = await JSON.parse(JSON.stringify(data));

  return {
    props: { 
      posts,
    },
    revalidate: 10,
  };
}