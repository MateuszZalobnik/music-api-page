import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

const MainLayout: React.FC<{children: JSX.Element}> = ({children}) => {
    
    return (
        <>
        <Header/>
        {children}
        <Footer />
        </>
    )
    
    
}

export default MainLayout;