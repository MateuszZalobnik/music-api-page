const Page: React.FC<{data: string[]}> = ({data}) => {
    return (
        <>
      <div>subpage</div>
      {data.map((item) => 
      (
      <div key={item}>
          <a href={item}>{item}</a>
      </div>
    ))}
        </>
    )
  }
  export default Page

  
  export async function getStaticProps(){
    const {categories} = await import('../../data.json');
    
  return { props: { data: categories } }
  }