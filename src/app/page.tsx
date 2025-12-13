import Image from 'next/image';
import Dither from '@/components/Dither';

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      <div className="fixed inset-0">
        <Dither
          waveColor={[0.2, 0.4, 0.8]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 max-w-6xl w-full">
          <div className="text-white text-sm md:text-base max-w-lg leading-relaxed space-y-6">
            <div className="space-y-1">
              <p>reach me on twitter: <a href="https://twitter.com/jia_seed" className="underline hover:opacity-80">@jia_seed</a></p>
              <p>email: <a href="mailto:jiachiachen@gmail.com" className="underline hover:opacity-80">jiachiachen@gmail.com</a></p>
              <p>portfolio: <a href="https://www.jia.build" className="underline hover:opacity-80">https://www.jia.build</a></p>
              <p>github: <a href="https://github.com/audgeviolin07" className="underline hover:opacity-80">https://github.com/audgeviolin07</a></p>
            </div>

            <p>
              i&apos;m co-founding sorcerer. any developer can get their customers by talking to ai @ <a href="https://usesorcerer.com" className="underline hover:opacity-80">usesorcerer.com</a>
            </p>

            <div>
              <p>unrelated things im interested in right now:</p>
              <ul className="list-disc list-inside">
                <li>open source typescript rate limiting analytics library</li>
                <li>email outreach optimization</li>
              </ul>
            </div>

            <div>
              <p>previous stuff i did:</p>
              <ul className="list-disc list-inside">
                <li>co-built sprint.dev. devtool distribution platform. 20k users in 5 months, 48k profit</li>
                <li>won 23 hackathons at places like yc, upenn, princeton</li>
                <li>240k streams on spotify and apple music as an indie musician</li>
                <li>got 120 mil views on social media with 130k followers</li>
                <li>drone research at nasa usrc</li>
                <li>got software engineering infra offers from disney and intuit</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <Image
              src="/jiame.png"
              alt="Jia"
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
            <p className="text-white text-sm md:text-base max-w-sm leading-relaxed text-center">
              i grew up as a sensitive and lonely weird gay girl with an active imagination in a conservative christian unpredictable asian immigrant household in the midwest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
