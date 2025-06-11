import Image from 'next/image';
import Link from 'next/link';

export default function Section1() {
  return (
    <section className="w-full py-10 relative px-4 sm:px-6">

      {/* ✅ Main Container */}
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-16
          h-auto md:h-[600px]
          rounded-xl
          bg-gradient-to-br from-[#4B0082] to-[#2E0854]
          p-6 md:p-10
          relative
        "
      >

        {/* ✅ Character image (foreground in mobile) */}
        <div className="absolute inset-0 md:hidden z-20 opacity-50">
          <Image
            src="/home/section1/voxo-character.png"
            alt="Robot Character Mobile"
            fill
            className="object-cover object-right"
            quality={100}
          />
        </div>

        {/* ✅ Left Side Content */}
        <div className="flex-1 flex flex-col items-start space-y-6 text-left relative z-30">
          <div className="w-full">
            <Image
              src="/home/section1/voxo-logo.png"
              alt="Voxo Deus Logo"
              layout="responsive"
              width={300}
              height={80}
              className="object-contain"
            />
          </div>

          <div className="text-gray-300 mb-5 ml-10 text-xl">
            <p className="mb-1">STARTS ON:</p>
            <p className="text-lg font-semibold text-white">
              Apr 07, 2025, 04:00 AM UTC
            </p>
            <Link href="/register">
              <button className="bg-white text-black font-semibold text-sm mt-10 px-5 py-2 rounded-full hover:bg-gray-200 transition">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        {/* ✅ Desktop Right Image */}
        <div className="hidden md:flex flex-1 relative h-full rounded-md overflow-hidden items-center justify-center pl-6">
          <Image
            src="/home/section1/voxo-character.png"
            alt="Robot Character Desktop"
            fill
            className="object-cover object-right rounded-md"
            quality={100}
          />
        </div>

      </div>
    </section>
  );
}
