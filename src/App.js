
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Init from "./ui/init";
import Menu from "./ui/menu";
import Reservation from "./ui/reservation";
import Login from "./ui/login";
import About from "./ui/about";
import Confirmation from "./ui/confirmation";
import BookingData from "./ui/bookingdata";
import { useAvailableTimes } from "./util/timesreducer";
function App() {
  const [availableTimes, dispatch] = useAvailableTimes();
  return <Router>
          <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservation availableTimes={availableTimes} dispatch={dispatch}/>} />
          <Route path="/order" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />}/>
          <Route path="/bookingdata" element={<BookingData/>}/>
          </Routes>
        </Router>;
}

export default App;
