const values = [
  {
    icon: 'verified_user',
    title: 'Keamanan Tingkat Enterprise',
    desc: 'Sistem yang kami bangun menggunakan protokol keamanan standar global untuk melindungi data aset berharga Anda.',
  },
  {
    icon: 'bolt',
    title: 'Efisiensi & Kecepatan',
    desc: 'Metodologi agile kami memastikan pengiriman proyek yang cepat tanpa mengorbankan kualitas detail produk.',
  },
  {
    icon: 'groups',
    title: 'Dukungan Ahli 24/7',
    desc: 'Tim spesialis kami siap mendampingi setiap langkah perjalanan transformasi digital perusahaan Anda.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-headline-xl text-headline-xl">
            Mengapa Bermitra Dengan Kami?
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl mx-auto">
            Kami mengedepankan kualitas, keamanan, dan keberlanjutan dalam setiap solusi
            digital yang kami bangun.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-secondary transition-all group"
            >
              <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center mb-6 text-on-primary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">{v.title}</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
