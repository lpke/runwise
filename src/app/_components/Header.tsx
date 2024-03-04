import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex h-14 flex-row items-center justify-between bg-slate-200 px-6">
      <div className="flex h-full flex-row items-center">
        <Link href="/" className="mr-6">
          Home
        </Link>
        <Link href="/reciprocal" className="mr-6">
          Reciprocal
        </Link>
        <Link href="/angles" className="mr-6">
          Angles
        </Link>
        <Link href="/active">Active</Link>
      </div>

      {/* App controls */}
      <div className="flex h-full flex-row items-center">...</div>
    </div>
  );
}
