const footerNav = [
  { label: 'Tentang Kami', highlight: false },
  { label: 'Layanan Digital', highlight: false },
  { label: 'Studi Kasus', highlight: true },
  { label: 'Karir IT', highlight: false },
]

const footerLegal = ['Kebijakan Privasi', 'Syarat & Ketentuan']

export default function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-bold text-on-tertiary mb-6">
            HiTech Aksara
          </div>
          <p className="text-on-tertiary/70 font-body-md text-body-md mb-6">
            Solusi transformasi digital terpercaya untuk masa depan bisnis Anda yang
            berkelanjutan.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded bg-on-tertiary/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
            <div className="w-8 h-8 rounded bg-on-tertiary/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">chat</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary mb-6">
            Navigasi
          </h4>
          <ul className="space-y-4">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`font-body-md text-body-md transition-transform hover:translate-x-1 inline-block ${
                    item.highlight
                      ? 'text-secondary-fixed-dim'
                      : 'text-on-tertiary/70 hover:text-on-tertiary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary mb-6">
            Legal
          </h4>
          <ul className="space-y-4">
            {footerLegal.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-on-tertiary/70 hover:text-on-tertiary transition-transform hover:translate-x-1 inline-block font-body-md text-body-md"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary mb-6">
            Kantor Kami
          </h4>
          <div className="text-on-tertiary/70 font-body-md text-body-md space-y-4">
            <p>
              Gedung Aksara Digital, Lt. 12
              <br />
              Jl. Sudirman Kav. 52, Jakarta Pusat
            </p>
            <p>+62 21 5555 1234</p>
            <p>info@hitechaksara.co.id</p>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-on-tertiary/10 text-center text-on-tertiary/50 font-label-md">
        © 2024 PT. HiTech Aksara Digital. All rights reserved.
      </div>
    </footer>
  )
}
