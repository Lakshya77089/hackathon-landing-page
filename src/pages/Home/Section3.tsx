// src/components/Section3.tsx
import Image from 'next/image';

export default function Section3() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-6 p-6 md:p-10 
                 min-h-[400px] md:min-h-[500px]"
    >
      {/* Top Horizontal Line */}
      <div className="w-full h-[1px] bg-gray-500"></div>

      {/* Single People Image */}
      <div className="relative w-full max-w-3xl h-[150px] md:h-[200px]">
        <Image
          src="/home/section3/peoples.png" // Replace with your single people image path
          alt="Group of People"
          layout="fill"
          objectFit="contain"
          className="object-center"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
        Empower your people. <span className="text-blue-400">Accelerate work.</span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base text-center max-w-3xl">
        Keep pace with the needs of your business. Deploy custom AI apps in a snap for any use case, including digital assistants, content generation, summarization, and data analysis.
      </p>

      {/* Bottom Horizontal Line */}
      <div className="w-full h-[1px] bg-gray-500"></div>
    </div>
  );
}