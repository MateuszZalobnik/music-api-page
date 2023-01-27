import MainLayout from "@/components/layout/MainLayout";

const MyApp: React.FC<{Component: JSX.Element; pageProps: any}> = ({Component, pageProps}) => {
    
    return (
        <>
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
    
        </>
    )
    
    
}

export default MyApp;