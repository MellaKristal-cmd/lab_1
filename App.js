import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export function App() {
    return<div style={{
        backgroundColor: "green",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}>
        <Header />
        <Footer />
    </div>
    
}