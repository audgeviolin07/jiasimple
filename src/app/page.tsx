import Image from 'next/image';
import Dither from '@/components/Dither';
import { Twitter, Mail, Github } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      <div className="fixed inset-0">
        <Dither
          waveColor={[0.25, 0.25, 0.25]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-10 max-w-4xl w-full p-8 md:p-12 rounded-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, transparent 60%)' }}>
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <Image
              src="/jiame.png"
              alt="Jia"
              width={200}
              height={200}
              className="rounded-lg"
              priority
            />
            <p className="text-white text-sm md:text-base leading-relaxed text-left w-full md:w-[280px]">
              i'm jia (佳)(jiā). i grew up a sensitive gay girl with an imagination in an unpredictable conservative christian asian immigrant household in the midwest. self-explanatory for my career.
            </p>
          </div>

          <div className="text-white text-sm md:text-base max-w-lg leading-relaxed space-y-6">
            <div className="flex gap-4">
              <a href="https://twitter.com/jia_seed" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="mailto:jiachiachen@gmail.com" className="hover:opacity-80">
                <Mail size={20} />
              </a>
              <a href="https://github.com/audgeviolin07" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>

            <p>
              current thought: hi -11:52pm est, dec 21st, 2025
            </p>

            <p>
              i&apos;m co-founding sorcerer. any developer can get their customers by talking to ai @ <a href="https://usesorcerer.com" className="underline hover:opacity-80">usesorcerer.com</a>
            </p>

            <div>
              <p>unrelated things i'm interested in right now:</p>
              <ul className="list-disc list-inside">
                <li>open source typescript rate limiting analytics library @ <a href="https://asillios.com" className="underline hover:opacity-80">asillios.com</a> <span className="text-red-300">(pls star on github if you see this)</span></li>
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

            <p>
              2025 portfolio @ <a href="https://www.jiaseed.com/" className="underline hover:opacity-80" target="_blank" rel="noopener noreferrer">jiaseed.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
