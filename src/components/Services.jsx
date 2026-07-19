const services = [
  {
    title: 'Cloud Infrastructure',
    desc: 'Optimasi infrastruktur cloud untuk performa maksimal dan biaya minimal.',
    icon: 'cloud_done',
  },
  {
    title: 'Cyber Security',
    desc: 'Proteksi berlapis terhadap ancaman siber.',
    icon: 'security',
  },
  {
    title: 'Data Analytics',
    desc: 'Wawasan mendalam dari data bisnis Anda.',
    icon: 'analytics',
  },
]

export default function Services() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-primary font-headline-xl text-headline-xl">Layanan Unggulan Kami</h2>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-xl">
              Solusi end-to-end untuk kebutuhan IT modern perusahaan Anda.
            </p>
          </div>
          <a
            className="text-secondary font-label-md text-label-md font-bold flex items-center gap-2 hover:gap-4 transition-all"
            href="#"
          >
            Lihat Semua Layanan
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter">
          <div className="md:col-span-2 md:row-span-2 bg-primary text-on-primary p-10 rounded-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl mb-8">developer_mode_tv</span>
              <h3 className="font-headline-xl text-headline-xl mb-4">Software Custom Development</h3>
              <p className="text-on-primary/70 font-body-md text-body-md mb-8 max-w-sm">
                Membangun perangkat lunak yang disesuaikan secara khusus untuk proses bisnis
                unik Anda.
              </p>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 rounded-lg font-label-md text-label-md transition-colors">
                Konsultasi Gratis
              </button>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] opacity-20 scale-150 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
              <span
                className="material-symbols-outlined text-[200px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                code
              </span>
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container-highest p-8 rounded-2xl border border-outline-variant group hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-4xl text-secondary">cloud_done</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform">
                north_east
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Cloud Infrastructure</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Optimasi infrastruktur cloud untuk performa maksimal dan biaya minimal.
            </p>
          </div>

          <div className="md:col-span-1 bg-white p-8 rounded-2xl border border-outline-variant hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">security</span>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Cyber Security</h3>
            <p className="text-on-surface-variant font-body-md text-body-md text-sm">
              Proteksi berlapis terhadap ancaman siber.
            </p>
          </div>

          <div className="md:col-span-1 bg-white p-8 rounded-2xl border border-outline-variant hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">analytics</span>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Data Analytics</h3>
            <p className="text-on-surface-variant font-body-md text-body-md text-sm">
              Wawasan mendalam dari data bisnis Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
