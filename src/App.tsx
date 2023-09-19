import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Services from "./components/Services";
const App = () => {

  return (
    <>
    <Navbar />
      <header>
        <div className="container">
          <div className="row">
            <div className="col">item</div>
            <div className="col">item</div>
          </div>
        </div>
      </header>
      <main>
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App
