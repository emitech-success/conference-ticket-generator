import { BiLocationPlus } from "react-icons/bi";
import TicketList from "./TicketList";
// import { Link } from "react-router-dom";

const TicketSelection = () => {
  return (
    <div className="max-w-[550px] mx-auto mt-3 rounded-lg text-white border-[#0E464F] border-2 shadow-md p-4">
      <div>
        <div className="flex justify-between">
          <h1>Ticket selection</h1>
          <p>step 1/3</p>
        </div>

        <div className="rounded-lg border-[#0E464F] border-2 p-4  shadow-md mt-4 bg-[#08252B]">
          <div className="p-4 text-center mb-4 rounded-lg border-[#0E464F]   border-1 shadow-md">
            <h2>Techember Fest ”25</h2>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <p>
              {" "}
              <BiLocationPlus /> <span>[Event Name]</span> ||{" "}
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <div className="rounded-lg border-[#0E464F] border-2 shadow-md mt-4"></div>

          <div className="mt-4">
            <h3>Select Ticket Type:</h3>
            <TicketList />
          </div>

          <div className="mt-4">
            <h3 className="mb-2"> Number of Tickets</h3>
            <select
              name=""
              id=""
              className="w-full rounded-lg bg-transparent border-[#0E464F] border-1 p-4"
            >
              <option value="1" className="bg-[#0E464F]">
                1
              </option>
              <option value="2" className="bg-[#0E464F]">
                2
              </option>
              <option value="3" className="bg-[#0E464F]">
                3
              </option>
              <option value="4" className="bg-[#0E464F]">
                4
              </option>
              <option value="5" className="bg-[#0E464F]">
                5
              </option>
              <option value="6" className="bg-[#0E464F]">
                6
              </option>
              <option value="7" className="bg-[#0E464F]">
                7
              </option>
              <option value="8" className="bg-[#0E464F]">
                8
              </option>
              <option value="9" className="bg-[#0E464F]">
                9
              </option>
              <option value="10" className="bg-[#0E464F]">
                10
              </option>
            </select>
          </div>

          <div className="mt-4 flex flex-col-reverse w-full gap-4 md:flex-row min-w-[220px] justify-between capitalize">
           
              <button
                type="button"
                className="w-full rounded-lg bg-transparent border-[#0E464F] border-2 p-3  hover:bg-[#24A0B5]"
              >
                cancel
              </button>
           

            
              <button
                type="button"
                className=" w-full p-3 bg-[#0E464F] rounded-lg hover:bg-[#24A0B5] transition"
              >
                next
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
