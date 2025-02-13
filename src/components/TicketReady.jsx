import { BiSolidLocationPlus } from "react-icons/bi";
import Userimg from '../assets/User.img.png';

const TicketReady = () => {
  return (
    <div className="max-w-[650px] mx-auto mt-3 rounded-lg text-white border-[#0E464F] border-2 shadow-md p-8">
      <h4 className="font-bold text-center">Your Ticket is Booked!</h4>
      <p className="text-center">Check your email for a copy or you can download</p>

      <div className="max-w-[400px] mx-auto rounded-lg border-[#0E464F] border-2 p-4  shadow-md mt-4 bg-[#08252B] ">
        <div className="border-[#0E464F] border-2 rounded-2xl">
          <div className="p-4 text-center mb-4 ">
            <h2>Techember Fest ”25</h2>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <p>
              {" "}
              <BiSolidLocationPlus /> <span>[Event Name]</span> ||{" "}
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <div className="flex justify-center my-4">
            <img src={Userimg} alt="avatar" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse w-full gap-4 md:flex-row min-w-[220px] justify-between capitalize">
           
           <button
             type="button"
             className="capitalize w-full rounded-lg bg-transparent border-[#0E464F] border-2 p-3  hover:bg-[#24A0B5]"
           >
             book another ticket
           </button>
        
           <button
             type="button"
             className="capitalize w-full p-3 bg-[#0E464F] rounded-lg hover:bg-[#24A0B5] transition"
           >
             download ticket
           </button>
         
       </div>


    </div>
  );
};

export default TicketReady;
