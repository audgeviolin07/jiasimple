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

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="text-white text-base leading-relaxed w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
              <div className="flex flex-col items-center">
                <p>aawarty</p>
              </div>
              <div className="flex flex-col items-center">
                <p>mohammad</p>
                <Image src="/johammad.png" alt="mohammad" width={100} height={100} className="rounded-lg mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <p>raymond</p>
              </div>
              <div className="flex flex-col items-center">
                <p>chloe</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
              <div className="flex flex-col items-center">
                <p>patricia</p>
              </div>
              <div className="flex flex-col items-center">
                <p>emily</p>
              </div>
              <div className="flex flex-col items-center">
                <p>elly</p>
              </div>
            </div>
          <p className="mt-8 text-center">...and more, adding u guys soon lol</p>
        </div>
      </div>
    </div>
  );
}
