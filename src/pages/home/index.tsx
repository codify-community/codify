import { Helmet } from 'react-helmet-async'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Header />
    </>
  )
}
