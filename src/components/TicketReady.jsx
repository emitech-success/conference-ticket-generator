/* eslint-disable react/prop-types */
import { BiSolidLocationPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import Userimg from '../assets/User.img.png';

const TicketReady = ({ formData }) => {
  const navigate = useNavigate()
  // const ticket = 2
  const { fullName, email, avatar,specialRequest } = formData;
  // if (!ticket) {
  //   return null; // Don't render if no ticket data is available
  // }
  console.log(formData);

  return (
    <div className="max-w-[650px] mx-auto mt-3 rounded-lg text-white border-[#0E464F] border-2 shadow-md p-8">
      <h4 className="font-bold text-center">Your Ticket is Booked!</h4>
      <p className="text-center">
        Check your email for a copy or you can download
      </p>

      <div className="max-w-[400px] mx-auto rounded-lg border-[#0E464F] border-2 p-4  shadow-md mt-4 bg-[#08252B] ">
        <div className="border-[#0E464F] border-2 rounded-2xl flex flex-col justify-center items-center p-4">
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
          <div className="flex justify-center my-4 w-[140px] h-[140px] border-4 border-[#24A0B5] rounded-lg">
            <img
              src={avatar}
              alt="avatar"
              className="w-full object-cover text-center rounded-lg"
            />
          </div>

          {/* table */}
          <div className="mt-6  grid grid-cols-2 border-2 border-[#12464E] bg-[#072C31]  rounded-lg shadow-md w-full max-w-md text-center">
            <div className="border-2 border-[#12464E] p-2 text-start">
              <span>Enter your name:</span> <span className="text-white">{fullName}</span>
            </div>
            <div className="border-2 border-[#12464E] p-2 text-start">
              <span>Enter your email:</span>{" "} <span className="text-white text-wrap text-start">{email}</span>
            </div>
            <div className="border-2 border-[#12464E] p-2 text-start">
              <span>Ticket type:</span> {" "}<span className="text-white">VVIP</span>
            </div>
            <div className="border-2 border-[#12464E] p-2">
              <span>Ticket for:</span> {" "}<span className="text-white text-start">1</span>
            </div>
            <div className=" p-2">
              <span>Special request?</span>{" "} <span className="text-white text-start">{specialRequest}</span>
            </div>
           
          </div>
          {/* table  */}
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse w-full gap-4 md:flex-row min-w-[220px] justify-between capitalize">
        <button
          type="button"
          className="capitalize w-full rounded-lg bg-transparent border-[#0E464F] border-2 p-3  hover:bg-[#24A0B5]"
          onClick={()=> navigate('/')}
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
