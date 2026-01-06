import Link from 'next/link';

export default function Writing() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
      <nav className="fixed top-6 right-6 md:top-8 md:right-12 lg:top-10 lg:right-16 flex gap-4 text-white text-sm md:text-base z-20">
        <Link href="/about" className="hover:opacity-80">about</Link>
        <Link href="/friends" className="hover:opacity-80">friends</Link>
        <Link href="/writing" className="hover:opacity-80">writing</Link>
      </nav>

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24 max-w-3xl mx-auto">
        <div className="text-white text-sm md:text-base leading-relaxed space-y-8">
          <h1 className="text-2xl md:text-3xl">writing</h1>
          <p>coming soon</p>
        </div>
      </div>
    </div>
  );
}
