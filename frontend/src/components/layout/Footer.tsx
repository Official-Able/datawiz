import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#101722] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/15 pb-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-block text-xl font-bold">Datawizable</Link>
          <p className="mt-5 max-w-md leading-relaxed text-white/65">
            We bring business discovery, product thinking, engineering, and data practice together.
          </p>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-white/50">Explore</h2>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/solutions" className="hover:underline">Services</Link>
            <Link href="/discovery" className="hover:underline">Discovery</Link>
            <Link href="/case-studies" className="hover:underline">Work</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-white/50">Connect</h2>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/contact" className="hover:underline">Discuss a project</Link>
            <a href="https://wa.me/2349160143190" className="hover:underline">WhatsApp</a>
            <Link href="/academy" className="hover:underline">Academy</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 pt-7 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Datawizable Limited</p>
        <p>Business discovery and digital systems.</p>
      </div>
    </footer>
  );
}
