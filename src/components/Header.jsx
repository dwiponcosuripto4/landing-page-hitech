export default function Header() {
  return (
    <section className="relative py-section-gap overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 opacity-10" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            Portofolio &amp; Studi Kasus
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Melihat bagaimana kami memberdayakan mitra bisnis melalui transformasi digital
            yang presisi, strategi yang berorientasi pada hasil, dan eksekusi teknologi
            kelas dunia.
          </p>
        </div>
      </div>
    </section>
  )
}
