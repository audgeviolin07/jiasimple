import Image from 'next/image';
import Dither from '@/components/Dither';
import GitHubContributions from '@/components/GitHubContributions';
import { Twitter, Mail, Github } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
      {/* <div className="fixed inset-0">
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
      </div> */}

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 max-w-4xl w-full p-8 md:p-12 rounded-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, transparent 60%)' }}>
          <div className="flex flex-col items-center flex-shrink-0 justify-between h-full">
            <Image
              src="/seedimage.png"
              alt="Jia"
              width={250}
              height={250}
              className="rounded-lg"
              priority
            />
            <p className="text-white text-base leading-relaxed text-left w-full max-w-lg md:w-[250px] mt-4">
              i'm jia (佳)(jiā). i grew up a sensitive gay girl with an active imagination in an unpredictable conservative asian immigrant household in the midwest.
            </p>
            <p className="text-base leading-relaxed text-left w-full max-w-lg md:w-[250px] mt-2" style={{ color: '#D8B4FE' }}>
              hey patti it's sweet you view this
            </p>
          </div>

          <a href="/" className="fixed top-6 left-6 md:top-8 md:left-12 lg:top-10 lg:left-16 flex items-center gap-2 text-white text-sm md:text-base z-20 hover:opacity-80">
            <Image src="/seedimage.png" alt="seed" width={20} height={20} />
            jia chen
          </a>

        <nav className="fixed top-6 right-6 md:top-8 md:right-12 lg:top-10 lg:right-16 flex items-center gap-4 text-white text-sm md:text-base z-20">
          <a href="/about" className="hover:opacity-80">about</a>
          <a href="/friends" className="hover:opacity-80">friends</a>
          <a href="/writing" className="hover:opacity-80">writing</a>
        </nav>

        <div className="text-white text-base max-w-lg leading-relaxed space-y-6">
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
              i&apos;m co-founding sorcerer. any developer can get their customers by talking to ai @ <a href="https://usesorcerer.com" className="underline hover:opacity-80">usesorcerer.com</a> (progressing into a frontier lab for sentiment)
            </p>

            <GitHubContributions />

            <div>
              <p>also currently hacking:</p>
              <ul className="list-disc list-inside">
                <li>open source typescript rate limiting analytics library @ <a href="https://asillios.com" className="underline hover:opacity-80">asillios.com</a> <a href="https://github.com/audgeviolin07/asillios-limiter"><img src="https://img.shields.io/github/stars/audgeviolin07/asillios-limiter?style=social" alt="GitHub stars" className="inline-block align-middle h-6" /></a> <a href="https://github.com/audgeviolin07/asillios-limiter" className="text-red-300 underline hover:opacity-80"> (star on github if you see this)</a></li>
              </ul>
            </div>

            <details>
              <summary className="cursor-pointer hover:opacity-80">previous stuff i did</summary>
              <ul className="list-disc list-inside mt-2">
                <li>co-built sprint.dev. devtool distribution platform. 20k users in 5 months, 48k profit</li>
                <li>won 23 hackathons at places like yc, upenn, princeton</li>
                <li>240k streams on spotify and apple music as an indie musician</li>
                <li>got 120 mil views on social media with 130k followers</li>
                <li>drone research at nasa usrc</li>
                <li>got software engineering infra offers from disney and intuit</li>
              </ul>
              <p className="mt-2">
                2025 portfolio @ <a href="https://www.jiaseed.com/" className="underline hover:opacity-80" target="_blank" rel="noopener noreferrer">jiaseed.com</a>
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
