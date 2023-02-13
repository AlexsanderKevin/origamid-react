import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../../../Head'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      {/* <Head 
        title="home"
        description="Essa eh a descricao da home" /> */}
      
      <Helmet>
        <title>Home</title>
        <meta name='description' content='descricao e tals'/>
      </Helmet>

      <h1> Home </h1>
      <p> Essa eh a Home </p>
      <Link to='/produto/notebook'>Notebook</Link>  {' '}
      <Link to='/produto/smartphone'>smartphone</Link>
    </div>
  )
}

export default Home
