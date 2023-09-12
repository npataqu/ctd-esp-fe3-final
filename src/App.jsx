import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Error from "./Routes/Error";
import { GlobalProvider } from "./Components/utils/global.context";



function App() {



  return (
    <GlobalProvider>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />

      </div>
    </GlobalProvider>
  );
}

export default App;
