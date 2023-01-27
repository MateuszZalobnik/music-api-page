import CategoryPage from '@/components/CategoryPage.tsx/CategoryPage';
import Link from 'next/link';
import React from 'react';

type Props = {
    data: any
}


export async function getStaticPaths() {
  const {categories} = await import('../../../data.json');

    // Fetch all the title values from an API
    const allPaths = categories.map((cat) => {
        return {
            params: {
                cat: cat.toString()
            }
        }
    })
    console.log(allPaths);

    // Return the paths
    return { paths:  allPaths, fallback: false };
}

export async function getStaticProps(context: any){
    const {users} = await import('../../../data.json');
const cat = context.params.cat;
    const data = users.filter(item => item.level === cat)
    console.log(data);

    return { props: {data} };
}

const MySubPage: React.FC<Props> = ({ data }) => {
    return <CategoryPage data={data} />;
}

export default MySubPage;

