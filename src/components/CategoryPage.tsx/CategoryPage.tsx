import Link from "next/link";

const CategoryPage: React.FC<{data: any}> = ({data}) => {
    
    return <h1>
        {data.map((item: {name: string, level: string, id:number}) => {
        return (
            <div>
                <Link href={`/users/${item.level}/${item.id}`} passHref>
                {item.name} {item.level}
                </Link>
            </div>
        )
    })}</h1>;
    
    
}

export default CategoryPage;