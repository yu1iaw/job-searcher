import { Toaster } from "react-hot-toast";
import {
    Background,
    Container,
    Header,
    HeaderTop,
    Footer,
    Logo,
    BookmarksButton,
    SearchForm,
    JobListSearch,
    JobItemContent,
    Sidebar,
    SidebarTop,
    SortingControls,
    PaginationControls,
    ResultsCount
} from '.';



export default function App() {
    return (
        <>
            <Toaster position="top-right" />
            <Background />
            <Header>
                <HeaderTop>
                    <Logo />
                    <BookmarksButton />
                </HeaderTop>
                <SearchForm />
            </Header>
            <Container>
                <Sidebar>
                    <SidebarTop>
                        <ResultsCount />
                        <SortingControls />
                    </SidebarTop>
                    <JobListSearch />
                    <PaginationControls />
                </Sidebar>
                <JobItemContent />
            </Container>
            <Footer />
        </>
    )
}

