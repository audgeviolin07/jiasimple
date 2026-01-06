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

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24 max-w-3xl mx-auto">
        <div className="text-white text-base leading-relaxed space-y-8">
          <h1 className="text-2xl md:text-3xl">friends</h1>
          <ul className="space-y-2">
            <li>aawarty</li>
            <li>mohammad</li>
            <li>chloe</li>
            <li>raymond</li>
            <li>patricia</li>
            <li>elly</li>
            <li>...and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
