// import AttendeeDetails from "./components/AttendeeDetails"
import Navbar from "./components/Navbar"
import TicketReady from "./components/TicketReady"
// import TicketSelection from "./components/TicketSelection"

const App = () => {
  return (
    <section className="bg-[#031D23] p-4">

    <Navbar />

     {/* <TicketSelection /> */}
     {/* <AttendeeDetails /> */}
     <TicketReady />
    </section>
  )
}
export default App