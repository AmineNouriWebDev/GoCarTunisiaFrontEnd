import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section from "./components/section/Section";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Section />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
