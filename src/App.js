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
import SignIn from './Pages/Signup';
import HowToSell from './Pages/HomeToSell';
import PlaceAdForSale from './Sign-up/PlaceAdForSale';
import PlaceAdForm from './Sign-up/PlaceAdForm';
import HomeWorth from './Pages/HomeWorth';
import ExpertHomeValution from './Pages/ExpertHomeValution';
import AllProperty from './Pages/AllProperty';
import ResidentialRent from './Sign-up/ResidentialRent';
import SharingRoom from './Sign-up/SharingRoom';
import AccountSetting from './Pages/AccountSetting';
import PropertyDetail from './Pages/PropertyDetail';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />

            <Route path="/buy" element={<ForRent />} />
            <Route path="/ForSale" element={<ForSale />} />
            <Route path="/Sharing" element={<Sharing />} />
            <Route path="/NewHomes" element={<NewHomes />} />
            <Route path="/HolidayHomes" element={<HolidayHomes />} />
            <Route path="/Overseas" element={<Overseas />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Commercial" element={<Commercial />} />
            <Route path="/StudentAccomendation" element={<StudentAccomendation />} />
            <Route path="/HomeToSell" element={< HowToSell/>} />
            <Route path="/PlaceAdForSale" element={< PlaceAdForSale/>} />
            <Route path="/residential-sale" element={< PlaceAdForm/>} />
            <Route path="/HomeWorth" element={< HomeWorth/>} />
            <Route path="/ExpertHomeValution" element={< ExpertHomeValution/>} />
            <Route path="/AllProperty" element={< AllProperty/>} />
            <Route path="/residential-rent" element={< ResidentialRent/>} />
            <Route path="/sharing-rent" element={< SharingRoom/>} />
            <Route path="/PlaceAdForSale/AccountSetting" element={< AccountSetting/>} />
            <Route path="/property/:id" element={<PropertyDetail />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
