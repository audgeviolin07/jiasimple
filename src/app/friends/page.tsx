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
              <div className="flex flex-col items-center">
                <p>aawarty</p>
                <Image src="/aawarty.png" alt="aawarty" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>mohammad</p>
                <Image src="/mohammad.png" alt="mohammad" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>raymond</p>
                <Image src="/raymond.png" alt="raymond" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>chloe</p>
                <Image src="/chloe.png" alt="chloe" width={180} height={180} className="rounded-lg mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
              <div className="flex flex-col items-center">
                <p>patricia</p>
                <Image src="/patricia.png" alt="patricia" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>emily</p>
                <Image src="/emily.png" alt="emily" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>elly</p>
                <Image src="/elly.png" alt="elly" width={180} height={180} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>hackathon friends</p>
                <Image src="/hackathonfriends.png" alt="hackathon friends" width={180} height={180} className="rounded-lg mt-2" />
              </div>
            </div>
          <p className="mt-8 text-center">...and more, adding u guys soon lol</p>
        </div>
      </div>
    </div>
  );
}
