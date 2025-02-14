/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BiCloudDownload } from "react-icons/bi";


const apiBaseUrl = "https://api.cloudinary.com/v1_1/di2p08ndb/image/upload"
const AttendeeDetails = ({formData, setFormData, loading, setLoading}) => {
  const navigate = useNavigate()

    const [errors, setErrors] = useState({});
    
  const saveToLocalStorage = ()=>{
    localStorage.setItem("conferenceFormData", JSON.stringify(formData));
  }
    useEffect(() => {
      const savedData = localStorage.getItem("conferenceFormData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);
  
    useEffect(() => {
      saveToLocalStorage()
    }, [formData]);

    const validateForm = () => {
      let tempErrors = {};
      if (!formData.fullName) tempErrors.fullName = "Full Name is required";
      if (!formData.specialRequest) tempErrors.specialRequest = "Special request is required";
      if (!formData.email) tempErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        tempErrors.email = "Invalid email format";
      if (!formData.avatar) tempErrors.avatar = "Avatar URL is required";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  const handleFileUpload = async (e)=>{
    setLoading(true)
    const file = e.target.files[0]
    if(!file)return 
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'first_time_using_cloudinary')
    data.append("cloud_name", 'di2p08ndb')
    const res = await fetch(apiBaseUrl, {
      method: "POST",
      body: data
    })
    const uploadImgUrl = await res.json()
    const avatar = uploadImgUrl.url
    console.log(avatar);
    
    setFormData({...formData, avatar})
    setLoading(false)
    
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setFormData(formData);
        navigate('/ticketready')
      }
    };
    const handleBtn =()=>{
      navigate('/')
    }
  return (
    <div className="max-w-[550px] mx-auto mt-3 rounded-lg text-white border-[#0E464F] border-2 shadow-md p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="capitalize">Attendee Details</h1>
          <p>step 2/3</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border-[#0E464F] border-2 p-4  shadow-md mt-4 bg-[#08252B]">
          <div className="p-4 text-center mb-4 rounded-lg border-[#0E464F]   border-1 shadow-md flex flex-col items-start">
            <label htmlFor="avatar">Upload profile photo</label>
            <input type="file" name="avatar" id="avatar"
            className="p-6 border-4 border-[#0E464F] mt-4 w-full"
            onChange={handleFileUpload}
            />
           {loading && <h6>Uploading...</h6>}
              {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar}</p>}
          </div>

          <div className="rounded-lg border-[#0E464F] border-2 shadow-md mt-4"></div>
          {/* name */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="fullName">Enter your name</label>
            <input type="text" name="fullName" id="fullName"
            className="p-3 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            value={formData.fullName}
              onChange={(e) =>
                // setFormData({ ...formData, fullName: e.target.value })
                setFormData(prev => {
                  return {...prev, fullName: e.target.value}
                })
              }
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          {/* email */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="email">Enter your email *</label>
            <input type="email" name="email" id="email"
            className="p-3 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          {/* special area */}
          <div className="text-center my-4 rounded-lg flex flex-col items-start">
            <label htmlFor="specialRequest">Special request?</label>
            
            <textarea name="specialRequest" id="specialRequest"
            className="p-4 border-2 mt-4 w-full rounded-lg border-[#0E464F]"
            placeholder="textarea"
            value={formData.specialRequest}
              onChange={(e) =>
                setFormData({ ...formData, specialRequest: e.target.value })
              }
            ></textarea>
            {errors.specialRequest && <p className="text-red-500 text-sm">{errors.specialRequest}</p>}
          </div>

          <div className="mt-4 flex flex-col-reverse w-full gap-4 md:flex-row min-w-[220px] justify-between capitalize">
          
           <button
             type="button"
             className="capitalize w-full rounded-lg bg-transparent border-[#0E464F] border-2 p-3  hover:bg-[#24A0B5]"
             onClick={handleBtn}
           >
             back
           </button>
          
        
           <button
             type="submit"
             className="capitalize w-full p-3 bg-[#0E464F] rounded-lg hover:bg-[#24A0B5] transition"
           onClick={handleSubmit }
           
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
