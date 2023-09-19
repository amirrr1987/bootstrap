import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <Card />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Card />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Card />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
