import { Route, Routes } from "react-router-dom";
import {  useState } from "react";
import Navbar from "./components/Navbar";
import AttendeeDetails from "./components/AttendeeDetails";
import TicketReady from "./components/TicketReady";
import TicketSelection from "./components/TicketSelection";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialRequest: "",
    avatar: "",
  });
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  
  
  return (
    <section className="bg-[#031D23] p-4">
      <Navbar ticket= {ticket} setTicket={setTicket}/>
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route
          path="/ticketdetails"
          element={<AttendeeDetails formData={formData}  setFormData={setFormData}
          loading= {loading} setLoading= {setLoading}
          />}
        />
        <Route
          path="/ticketready"
          element={<TicketReady  formData={formData} setFormData={setFormData}/>}
        />
      </Routes>
    </section>
  );
};
export default App;
