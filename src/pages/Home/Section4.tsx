import Image from 'next/image';
import Link from 'next/link';

export default function Section4() {
  const hackathons = [
    {
      image: '/home/section4/hackathon1.png',
      duration: '12D : 22H : 11M',
      date: '24 August',
      title: 'HACKATHON Aptos x GCP: AI Agent',
      participants: 2150,
      colour: '#BB3544',
    },
    {
      image: '/home/section4/hackathon2.png',
      duration: '12D : 22H : 11M',
      date: '24 August',
      title: 'HACKATHON Aptos x GCP: AI Agent',
      participants: 2150,
      colour: '#A2253F',
    },
    {
      image: '/home/section4/hackathon3.png',
      duration: '12D : 22H : 11M',
      date: '24 August',
      title: 'HACKATHON Aptos x GCP: AI Agent',
      participants: 2150,
      colour: '#038A50',
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Popular Hackathons
        </h2>

        {/* Hackathon Cards */}
        <div className="flex flex-col gap-6">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row-reverse rounded-xl overflow-hidden bg-cover bg-center md:h-[220px]"
              style={{ backgroundImage: `url(${hackathon.image})` }}
            >
              {/* Mobile Image View */}
              <div className="md:hidden w-full h-[180px] relative">
                <Image
                  src={hackathon.image}
                  alt="Hackathon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>

              {/* Desktop Overlay (Hidden on Mobile) */}
              <div className="hidden md:block absolute inset-0 bg-black opacity-0"></div>

              {/* Duration Label */}
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-70 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                {hackathon.duration}
              </div>

              {/* Info Box */}
              <div
                className="relative z-10 w-full md:w-[300px] p-4 md:p-6 rounded-none md:rounded-l-xl md:ml-auto flex flex-col justify-center gap-2"
                style={{ backgroundColor: hackathon.colour }}
              >
                <p className="text-base md:text-lg font-medium text-white">
                  {hackathon.date}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {hackathon.title}
                </h3>
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
                  <span className="text-xs ml-5 font-bold text-white">
                    {hackathon.participants}
                  </span>
                </div>

                <Link href="/hackathon">
                  <button className="mt-2 bg-white text-[#BB3544] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
                    Starter Now →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
