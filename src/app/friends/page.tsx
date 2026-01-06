import Link from 'next/link';
import Image from 'next/image';

export default function Friends() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
      <Link href="/" className="fixed top-6 left-6 md:top-8 md:left-12 lg:top-10 lg:left-16 flex items-center gap-2 text-white text-sm md:text-base z-20 hover:opacity-80">
        <Image src="/seedimage.png" alt="seed" width={20} height={20} />
        jia chen
      </Link>

      <nav className="fixed top-6 right-6 md:top-8 md:right-12 lg:top-10 lg:right-16 flex items-center gap-4 text-white text-sm md:text-base z-20">
        <Link href="/about" className="hover:opacity-80">about</Link>
        <Link href="/friends" className="hover:opacity-80">friends</Link>
        <Link href="/writing" className="hover:opacity-80">writing</Link>
      </nav>

      <div className="relative z-10 flex items-start justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="text-white text-base leading-relaxed w-full max-w-4xl mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
              <div className="flex flex-col items-center text-center">
                <p>aawarty</p>
                <Image src="/aawarty.png" alt="aawarty" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">best friend of 9 years. #1 and deservedly. so loyal and has always been there for me. best musical parodies and long philosophical convos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>mohammad</p>
                <Image src="/mohammad.png" alt="mohammad" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">one of my best friends for 4 years, met in uni and always had discord convos. co-founding with him rn!</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>raymond</p>
                <Image src="/raymond.png" alt="raymond" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">family friend turned irreplaceable friend of 12 years. we both pushed each other with music</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>chloe</p>
                <Image src="/chloe.png" alt="chloe" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">sister. one of the coolest and most fashionable people ever. so proud of her for everything!</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <p>emily</p>
                <Image src="/emily.png" alt="emily" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">best mentor, friend, tea-sharing everything person. so cultured, energetic, and reliable</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>patricia</p>
                <Image src="/patricia.png" alt="patricia" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">one of the wittiest people i know, so incredibly brilliant. i feel like i can talk to her about any topic</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>elly</p>
                <Image src="/elly.png" alt="elly" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">so thoughtful, artistic, and i admire how operationally and deep thinking she is</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p>hackathon friends</p>
                <Image src="/hackathonfriends.png" alt="hackathon friends" width={180} height={180} className="rounded-lg mt-2" />
                <p className="text-sm mt-2 text-gray-300">these guys are epic</p>
              </div>
            </div>
          <p className="mt-8 text-center">...and more, adding u guys soon lol</p>
        </div>
      </div>
    </div>
  );
}
