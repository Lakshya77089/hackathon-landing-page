import Section1 from '@/pages/Register/Section1';
import Navbar from '@/pages/Navbar';
import Section2 from '@/pages/Register/Section2';
import Section4 from '@/pages/Register/Section4';
import Footer from '@/pages/Footer';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function RegisterPage() {
  return (
    <>
      <main>
        <Navbar />
        
        <BlurFade inView={true} duration={0.6}>
          <Section1 />
        </BlurFade>
        
        <BlurFade inView={true} duration={0.6}>
          <Section2 />
        </BlurFade>
        
        <BlurFade inView={true} duration={0.6}>
          <Section4 />
        </BlurFade>
        
        <Footer />
      </main>
    </>
  );
}
