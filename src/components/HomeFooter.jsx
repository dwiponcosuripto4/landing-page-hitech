const services = ['Software Development', 'Cloud Infrastructure', 'Cyber Security', 'Data Analytics']
const company = ['Tentang Kami', 'Studi Kasus', 'Karir IT', 'Kebijakan Privasi']

export default function HomeFooter() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="font-headline-lg text-headline-lg font-bold text-on-tertiary">
            HiTech Aksara Digital
          </div>
          <p className="text-on-tertiary/70 font-body-md text-body-md">
            Solusi terintegrasi untuk akselerasi bisnis di era digital. Membangun masa depan
            dengan inovasi dan presisi.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-on-tertiary/20 flex items-center justify-center hover:bg-on-tertiary/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-on-tertiary/20 flex items-center justify-center hover:bg-on-tertiary/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline-lg text-headline-lg font-bold">Layanan</h4>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item}>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-transform inline-block" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline-lg text-headline-lg font-bold">Perusahaan</h4>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item}>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-transform inline-block" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline-lg text-headline-lg font-bold">Hubungi Kami</h4>
          <div className="flex items-start gap-3 text-on-tertiary/70">
            <span className="material-symbols-outlined text-secondary-fixed-dim">location_on</span>
            <p>Jl. Aksara Digital No. 88, Jakarta Selatan, 12345</p>
          </div>
          <div className="flex items-center gap-3 text-on-tertiary/70">
            <span className="material-symbols-outlined text-secondary-fixed-dim">call</span>
            <p>+62 21 5555 1234</p>
          </div>
          <div className="flex items-center gap-3 text-on-tertiary/70">
            <span className="material-symbols-outlined text-secondary-fixed-dim">mail</span>
            <p>contact@hitechaksara.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-on-tertiary/10 text-center text-on-tertiary/50 font-label-md text-label-md">
        © 2024 PT. HiTech Aksara Digital. All rights reserved.
      </div>
    </footer>
  )
}
