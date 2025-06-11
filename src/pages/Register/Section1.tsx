// @/pages/Register/Section1.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js

export default function Section1() {
  return (
    <section className="bg-gradient-to-b py-14 px-2 flex justify-center">
      <div className="p-8 rounded-lg  max-w-5xl  w-full flex flex-col md:flex-row items-center justify-between bg-[#7f7f7f]/30  border-t-2 border-b-2 border-blue-400 from-white to-blue-500  ">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-6">
          {/* Countdown Timer */}
          <div className="text-white text-xl font-semibold bg-black rounded-lg px-4 py-2">
            12D : 22H : 11M
          </div>

          {/* Logo and Event Title */}
          <div className="flex flex-col items-start space-y-2">
            {/* HACKATHON text */}
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <Image src="/register/Soneium.png" alt="Soneium Logo" width={120} height={120} />
              <div  className='flex-col'>
            <div className="text-gray-400 text-sm font-semibold uppercase">
              HACKATHON
            </div>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                Aptos x GCP: <br /> AI Agent
              </h1>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="text-grey flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-6 text-xs">
            <div>
            <div>STARTS ON:</div>
            <div> Apr 07, 2025, 04:00 AM UTC (UTC)</div>
            </div>
            <div>
            <div>ENDS ON:</div>
            <div>May 12, 2025, 03:59 AM UTC (UTC)</div>
            </div>
            <div>
            <div>HACKATHON:</div>
            <div>Online</div>
            </div>
          </div>


          <div className="text-white text-2xl md:text-3xl font-bold md:ml:0 ml-[16%] mt-10 mr-10">
            REWARD <span className=" text-3xl md:text-5xl ml-5 text-yellow-600">$300</span>
          </div>

          
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end  space-y-4 mb-5 md:mt-0">
          {/* Organizer */}
          <div className="text-white text-sm mt-5 md:mt:0 mt-5 md:mb-10">
            <div className='text-sm text-gray-400'>ORGANIZED BY</div> 
            <div className='text-xl font-bold text-white'>BFM ACADEMY</div>
          </div>

          {/* Event Date */}
          <div className='flex items-end mr-[17%] md:mr:0'>
          <div className="text-white text-5xl ml-10 font-bold">24</div><div className="text-white text-xl ml-2 font-bold">AUGUST</div>
            </div>
          <div className="flex items-center -space-x-2 border border-white rounded px-2 py-1 w-fit">
            <div className="relative">
              <Image
                src="/home/section4/participantpic.png"
                alt="Participants"
                width={60}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-xs ml-5 font-bold text-white">2150</span>
          </div>

          {/* Register Button */}
          <Link href="/register">
            <button className="bg-white text-gray-800 font-semibold py-3  bt-5 px-10 rounded-lg hover:bg-gray-100 transition uppercase">
              Register Now
            </button>
          </Link>
          <div className='w-full md:w-100 text-center md:text-right  mt-5'>
          <p className="text-white text-sm max-w-md">
            Build autonomous agents that interact with smart contracts and execute tasks without humans in the loop. Think logic engines, protocol automators, or chain bots!
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}