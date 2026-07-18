export default function HomeCTA() {
  return (
    <section className="mb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-on-primary font-display-lg text-display-lg max-w-3xl mx-auto">
              Siap Memulai Transformasi Digital Anda?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg max-w-xl mx-auto">
              Konsultasikan kebutuhan teknologi perusahaan Anda dengan tim ahli kami secara
              gratis hari ini.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-headline-lg text-headline-lg font-bold shadow-xl hover:scale-105 transition-transform">
                Mulai Sekarang
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-headline-lg text-headline-lg font-bold hover:bg-white/10 transition-all">
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
