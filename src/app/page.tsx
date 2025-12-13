import Image from 'next/image';
import Dither from '@/components/Dither';

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-6xl w-full">
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-md leading-relaxed">
            i grew up as a sensitive and lonely weird gay girl with an active imagination in a conservative christian unpredictable asian immigrant household in the midwest.
          </p>

          <Image
            src="/jiame.png"
            alt="Jia"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
