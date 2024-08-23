import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ForRent from './Pages/ForRent';
import ForSale from './Pages/ForSale';
import Sharing from './Pages/Sharing';
import NewHomes from './Pages/NewHomes';
import HolidayHomes from './Pages/HolidayHomes';
import Overseas from './Pages/Overseas';
import Parking from './Pages/Parking';
import Commercial from './Pages/Commercial';
import StudentAccomendation from './Pages/StudentAccomendation';
// import SignIn from './Pages/Signup';
import HowToSell from './Pages/HomeToSell';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<SignIn />} /> */}

            <Route path="/ToRent" element={<ForRent />} />
            <Route path="/ForSale" element={<ForSale />} />
            <Route path="/Sharing" element={<Sharing />} />
            <Route path="/NewHomes" element={<NewHomes />} />
            <Route path="/HolidayHomes" element={<HolidayHomes />} />
            <Route path="/Overseas" element={<Overseas />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Commercial" element={<Commercial />} />
            <Route path="/StudentAccomendation" element={<StudentAccomendation />} />
            <Route path="/HomeToSell" element={< HowToSell/>} />

           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
