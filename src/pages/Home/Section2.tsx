// src/components/Section2.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-6 rounded-xl 
                 p-6 md:p-10 bg-cover bg-center relative min-h-[400px] md:min-h-[500px]"
      style={{
        backgroundImage: "url('/home/section2/section2.png')", 
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

      {/* Main Heading */}
      <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center leading-tight z-10">
        YOUR ADVENTURE <br /> STARTS HERE
      </h1>

      {/* Description */}
      <p className="relative text-gray-200 text-sm md:text-base text-center max-w-2xl z-10">
        Join a community of innovators, coders, designers, and dreamers. At BFM Academy, our hackathons are more than just competitions—they’re launchpads for bold, creative problem-solving, and real-world change.
      </p>

      {/* Button with Telegram Icon */}
      <Link href="https://t.me/yourcommunity" target="_blank" rel="noopener noreferrer">
        <button className="relative flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition z-10">
          <Image
            src="/home/section2/telegram icon.png" // Replace with your Telegram icon path
            alt="Telegram Icon"
            width={20}
            height={20}
            className="object-contain"
          />
          <span>Join Our Community</span>
        </button>
      </Link>
    </div>
  );
}