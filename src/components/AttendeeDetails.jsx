const AttendeeDetails = () => {
  return (
    <div className="max-w-[550px] mx-auto mt-3 rounded-lg text-white border-[#0E464F] border-2 shadow-md p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="capitalize">Attendee Details</h1>
          <p>step 2/3</p>
        </div>

        <form className="rounded-lg border-[#0E464F] border-2 p-4  shadow-md mt-4 bg-[#08252B]">
          <div className="p-4 text-center mb-4 rounded-lg border-[#0E464F]   border-1 shadow-md flex flex-col items-start">
            <label htmlFor="avatar">Upload profile photo</label>
            <input type="file" name="avatar" id="avatar"
            className="p-6 border-4 border-[#0E464F] mt-4 w-full"
            />
          </div>

          <div className="rounded-lg border-[#0E464F] border-2 shadow-md mt-4"></div>
          {/* name */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="avatar">Enter your name</label>
            <input type="text" name="name" id="name"
            className="p-3 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            />
          </div>
          {/* email */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="email">Enter your email *</label>
            <input type="email" name="email" id="email"
            className="p-3 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            />
          </div>
          {/* special area */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="email">Special request?</label>
            
            <textarea name="" id=""
            className="p-4 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            placeholder="textarea"
            ></textarea>
          </div>

          <div className="mt-4 flex flex-col-reverse w-full gap-4 md:flex-row min-w-[220px] justify-between capitalize">
           
           <button
             type="button"
             className="capitalize w-full rounded-lg bg-transparent border-[#0E464F] border-2 p-3  hover:bg-[#24A0B5]"
           >
             back
           </button>
        
           <button
             type="submit"
             className="capitalize w-full p-3 bg-[#0E464F] rounded-lg hover:bg-[#24A0B5] transition"
           >
             Get My Free Ticket
           </button>
         
       </div>

        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
