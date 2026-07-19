export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-20 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter relative z-10">
        <div className="flex flex-col justify-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            <span className="text-secondary-fixed font-label-md text-label-md tracking-wider uppercase">
              Inovasi Digital Terdepan
            </span>
          </div>
          <h1 className="text-on-primary font-display-lg text-display-lg leading-tight">
            Akcelerasi <span className="text-on-primary-container">Transformasi Digital</span> Anda
          </h1>
          <p className="text-on-primary/80 font-body-lg text-body-lg max-w-xl">
            Kami menghadirkan solusi teknologi mutakhir yang dirancang untuk meningkatkan
            efisiensi operasional dan daya saing bisnis Anda di era digital yang serba cepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-label-md text-label-md font-bold shadow-lg hover:translate-y-[-2px] transition-all">
              Pelajari Layanan Kami
            </button>
            <button className="border-2 border-on-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-on-primary/10 transition-all flex items-center justify-center gap-2">
              Lihat Portofolio
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container/30 blur-[80px] rounded-full" />
            <img
              className="w-full h-full object-contain animate-float drop-shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKJbakLlI2U8T-_v1PgGTnKkIbUNUGuZ8c0lQQbsLw05Rf8DMDba4VhpAoj7cZVC9tiEM3NIwh4RXugQnuyumKSQyX_m5gW-xz77Nuf2EpGLBLj79kZ--M8DNqObAzgzKNW_O9PhJEJ0zHyxYyiO_apCHoJq69LirPbcM2DN2J0O1pxbwlQbCywRz3QFnWCpqrKz3evLO4F1izuiT7CVPZRPOVRvwhMpS2_XSZAA_yA6oMn66ETJ1suwbnOT402sIeghnFjCJZytA"
              alt="Visualisasi 3D jaringan digital dan konektivitas global"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
