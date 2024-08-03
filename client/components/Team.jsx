import { AccountBoxOutlined } from "@mui/icons-material";
const Team = () =>{return(
<div
        id="section3"
        className="min-h-screen  text-white flex flex-col items-center justify-center relative px-4"
      >
        <div className="place-content-end relative">
          <h2 className="text-4xl font-bold text-center">Meet Our Team</h2>
          <p className="text-center text-lg mt-8 text-gray-400 px-4">
            Individuals behind Build Your Notes
          </p>
        </div>
        <div className="md:flex gap-3 grid mt-20">
          <div className="text-center max-w-xs bg-[#272727fb] p-6 px-9 mx-5 rounded-lg shadow-lg">
            <AccountBoxOutlined style={{ fontSize: 50 }} />
            <h3 className="text-xl font-semibold mt-2">Om Mishra</h3>
            <p className="mt-2">
              Tech enthusiast with vision to create meaningful stuff.
            </p>
            <a
              href="#_"
              className="mt-3 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Know more</span>
            </a>
          </div>
          <div className="text-center max-w-xs bg-[#272727fb] p-6 px-9 mx-5 rounded-lg shadow-lg">
            <AccountBoxOutlined style={{ fontSize: 50 }} />
            <h3 className="text-xl font-semibold mt-2">Yash Agrawal</h3>
            <p className="mt-2">
              Tech enthusiast with vision to create meaningful stuff.
            </p>
            <a
              href="#_"
              className="mt-3 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Know more</span>
            </a>
          </div>
        </div>
      </div>)}
      export default Team;