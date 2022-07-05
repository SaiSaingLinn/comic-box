module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
    loader: 'imgix',
    path: '',
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
}
