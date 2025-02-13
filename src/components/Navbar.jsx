import { Link, useLocation } from "react-router-dom";
import { links } from "../data";
import { BsArrowRight } from "react-icons/bs";



const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location?.pathname === path;
  return (
    <nav className="flex items-center justify-between px-6 py-4 rounded-lg text-white border-[#0E464F] border-2 shadow-md">
      
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>
      
      {/* Navigation Links - Hidden on Mobile */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              className={`text-white hover:text-blue-700 transition 
                ${
    isActive(link.path) ? "font-semibold text-blue-700" : ""
  }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Ticket Button */}
      <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-[#24A0B5] hover:text-white transition">
        Ticket <BsArrowRight size={18} />
      </button>






        
    </nav>
  )
}
export default Navbar