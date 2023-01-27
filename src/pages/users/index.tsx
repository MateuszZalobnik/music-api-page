import Link from 'next/link';
import React from 'react';
import axios from 'axios';

const MyPage:React.FC<{categories:string[]}> = ({categories}) => {
  
  // Use the data to display the content of the page
  return <div>
    {categories.map((item) => {
      return (
        <div>
          <Link href={`/users/${item}`} passHref>
          {item}
          </Link>
        </div>
        )
    })}
  </div>;
}
export default MyPage


export async function getStaticProps () {

  axios.get('https://musicapi-fpzm.onrender.com/music')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally
  const {categories} = await import('../../data.json');

  // Fetch the data for the corresponding title      
  // Return the data as a prop
  return { props: {categories}  };
}
