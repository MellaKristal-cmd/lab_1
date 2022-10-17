import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AuthForm from "./containers/AuthForm";


export function App() {
    return<div style={{
        backgroundColor: "green",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}>
        <Header />
        <Main>
            <AuthForm />
        </Main>
        <Footer />
    </div>
    
}