import React from 'react';

type Props = {
    data: any
}


export async function getStaticPaths() {
  const {users} = await import('../../../data.json');

    // Fetch all the title values from an API
    const allPaths = users.map((user) => {
        return {
            params: {
                cat: user.level.toString(),
                id: user.id.toString()
            }
        }
    })
    
    // Return the paths
    return { paths:  allPaths, fallback: false };
}

export async function getStaticProps(context: any){
    const {users} = await import('../../../data.json');
    
const id = context.params.id;
    const data = users.filter(item => item.id == id)

    return { props: {data} };
}

const MySubPage: React.FC<Props> = ({ data }) => {
    
    return (
        <div>
            {data.map((item: {name: string, level: string}) => {
                return (
                    <>
                <h4>name: {item.name}</h4>
                <h4>level: {item.level}</h4>
                    </>
                )
            })}

        </div>
    )
    
    
}

export default MySubPage;

