export default function CTA() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="relative rounded-[2.5rem] bg-primary overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display-lg text-display-lg text-on-primary mb-8">
              Mulai Proyek Anda Bersama Kami
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-12">
              Siap mentransformasi bisnis Anda dengan teknologi terkini? Konsultasikan
              kebutuhan Anda dengan tim ahli kami hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-headline-lg text-headline-lg hover:scale-105 transition-transform">
                Hubungi Kami
              </button>
              <button className="border-2 border-on-primary text-on-primary px-10 py-4 rounded-xl font-headline-lg text-headline-lg hover:bg-on-primary hover:text-primary transition-all">
                Lihat Layanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
