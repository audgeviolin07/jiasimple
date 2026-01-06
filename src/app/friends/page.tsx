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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 max-w-4xl w-full p-8 md:p-12">
          <div className="hidden md:block w-[250px] flex-shrink-0"></div>

          <div className="text-white text-base max-w-lg leading-relaxed space-y-6">
            <ul className="space-y-2">
              <li>aawarty</li>
              <li>mohammad</li>
              <li>chloe</li>
              <li>raymond</li>
              <li>patricia</li>
              <li>elly</li>
              <li>...and more, adding u guys soon lol</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
