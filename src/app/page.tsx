import bgImage from '../assets/images/bg.png';
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <Image 
      src={bgImage}
      alt='background image'
      />
      home
    </div>
  );
}
