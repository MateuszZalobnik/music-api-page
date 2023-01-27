import React from 'react';

const Page:React.FC <{data: {name: string; level: string;}[]}> = ({data}) => {
    
    return (
        <>
      <div>example</div>
        {Array.isArray(data) ? data.map((item) => {
        return <div key={item.name}>{item.name}, {item.level}</div>}): console.log('not arra')
        }
        </>
    )
  }
  export default Page

  export async function getServerSideProps() {
    
    const {users} = await import('../../data.json');
    
  return { props: { data: users } }
  }
