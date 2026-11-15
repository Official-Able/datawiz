export function VideoAd() {
  return (
    <section aria-labelledby="datawizable-film-title" className="border-b border-gray-200 bg-[#F4F7FC] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-bold uppercase text-primary">A closer look</p>
          <h2 id="datawizable-film-title" className="max-w-xl font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-4xl">
            See how we bring business and technology together.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            A short introduction to the people, systems thinking, and digital work behind Datawizable.
          </p>
        </div>
        <div className="min-w-0 overflow-hidden bg-[#101722]">
          <video
            controls
            playsInline
            preload="metadata"
            aria-label="A short introduction to Datawizable"
            className="aspect-video w-full object-contain"
          >
            <source src="/datawizable.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
