import "./App.css";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TopContent from "./components/TopContent";
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <TopContent />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
