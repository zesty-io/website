import React from 'react';
import Home from 'views/Home';

const HomePage = () => {
  return <Home />;
};

// This gets called on every request
export async function getServerSideProps() {
  console.log('Logging : ');
  // Fetch data from external API
  const res = await fetch(`https://www.zesty.io/?toJSON`)
  console.log('aasdsad')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default HomePage;
