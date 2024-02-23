import Container from "./_component/container";
import Navbar from "./_component/navbar";
import Sidebar from "./_component/sidebar";

const BrowseLayout = ({ children } :{ children: React.ReactNode} ) => {
    return (
        <>
        <Navbar />
            <div className="flex h-full pt-20">
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
}

export default BrowseLayout;