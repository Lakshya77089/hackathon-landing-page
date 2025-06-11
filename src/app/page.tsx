import { BlurFade } from '@/components/magicui/blur-fade'
import Footer from '@/pages/Footer';
import Navbar from '@/pages/Navbar';
import Section1 from '@/pages/Home/Section1';
import Section2 from '@/pages/Home/Section2';
import Section3 from '@/pages/Home/Section3';
import Section4 from '@/pages/Home/Section4';
import Section5 from '@/pages/Home/Section5';

export default function HomePage() {
  return (
    <>
      <main className="px-6 py-8">
      <Navbar />
      <BlurFade inView={true} duration={0.6}>
      <Section1 />
			</BlurFade>
      <BlurFade inView={true} duration={0.6}>
        <section className="w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-6">
            <Section2 />
            <Section3 />
          </div>
        </section>
        </BlurFade>
        <BlurFade inView={true} duration={0.6}>
        <Section4 />
        </BlurFade>
        <BlurFade inView={true} duration={0.6}>
        <Section5 />
        </BlurFade>
      </main>
      <Footer/>
    </>
  );
}