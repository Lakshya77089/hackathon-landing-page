export default function Section5() {
  return (
    <section className="w-full px-4 md:px-8 py-8 bg-black rounded-2xl text-white">
      <div className="max-w-7xl mx-auto space-y-6"> 
        <div className="bg-black rounded-full overflow-hidden">
          <hr className="border-t border-gray-700" />
        </div>


        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full md:w-[20%] rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-indigo-500">
            <div className="rounded-2xl bg-black px-4 py-8 md:py-12 text-center">
              <h3 className="text-white text-base md:text-lg font-semibold leading-snug">
                Earn Tokens<br />While You Learn
              </h3>
            </div>
          </div>


          <div className="w-full md:w-[50%] rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-indigo-500">
            <div className="rounded-2xl bg-black px-4 py-6 md:py-8 flex flex-col md:flex-row items-center text-white space-y-4 md:space-y-0">
              <h3 className="text-base md:text-xl md:ml-5 font-semibold md:w-[40%] text-center md:text-left">
                Industry-Standard<br />Web3 Courses
              </h3>
              <p className="text-xs md:text-sm text-gray-300 md:w-[60%] text-center md:text-left">
                Gain in-depth knowledge from expertly curated courses that align with global Web3 industry standards, ensuring you’re ready for real-world applications.
              </p>
            </div>
          </div>

          {/* Part 3 */}
          <div
            className="w-full md:w-[30%] rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-indigo-500"
            style={{
              backgroundImage: 'url(/home/section5/Frame.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-2xl bg-black bg-opacity-100 px-4 py-8 md:py-12 text-center text-white">
              <h3 className="text-base md:text-lg font-semibold leading-snug">
                Free Access To Web3 Networking Events In 60+ Countries
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white rounded-xl p-6">
          {/* Left */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 flex flex-col justify-center items-center text-center">
            <p className="text-xs mb-2">
              Receive expert guidance, mentorship, and resources to launch or scale your Web3 startup with access to leading incubators and accelerators.
            </p>
            <div className="text-lg font-semibold">
              Free Consultation, Incubation,<br />& Accelerator Access
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-snug">
              <span className="text-indigo-300">Be A Part Of The</span><br />
              <span className="text-white">Biggest Web3 Competition & Win</span><br />
              <span className="text-white">Prizes</span>
            </h3>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between items-center text-center px-4">
            <p className="text-xs text-gray-300 mb-4">
              Showcase your skills, compete with the best minds in Web3, and stand a chance to win exciting rewards, funding, and global recognition.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
              Get Early Access →
            </button>
          </div>
        </div>

        {/* Bottom HR */}
        <div className="bg-black rounded-full overflow-hidden">
          <hr className="border-t border-gray-700" />
        </div>
      </div>
    </section>
  );
}
