import { useState } from 'react'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import { supabase } from '../lib/supabase'

const contactItems = [
  {
    icon: 'location_on',
    iconBg: 'bg-primary-fixed text-primary',
    border: 'border-primary',
    title: 'Kantor Pusat',
    titleColor: 'text-primary',
    body: 'Gedung Aksara Digital, Lt. 12<br/>Jl. Sudirman Kav. 52, Jakarta Selatan',
  },
  {
    icon: 'call',
    iconBg: 'bg-secondary-fixed text-secondary',
    border: 'border-secondary',
    title: 'Telepon',
    titleColor: 'text-secondary',
    body: '+62 21 5555 1234',
  },
  {
    icon: 'mail',
    iconBg: 'bg-tertiary-fixed text-tertiary',
    border: 'border-tertiary-container',
    title: 'Email',
    titleColor: 'text-tertiary',
    body: 'contact@hitechaksara.co.id',
  },
]

const hourRows = [
  { day: 'Senin - Jumat', time: '08:00 - 18:00', closed: false },
  { day: 'Sabtu', time: '09:00 - 14:00', closed: false },
  { day: 'Minggu', time: 'Tutup', closed: true },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = e.target
    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value || null,
      subject: form.subject.value,
      message: form.message.value,
    }

    try {
      const { error } = await supabase.from('contact_messages').insert(payload)
      if (error) throw error
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      console.error('Failed to send message:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Hubungi Kami
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-2xl">
              Siap mengakselerasi transformasi digital bisnis Anda? Mari berdiskusi tentang
              bagaimana solusi teknologi kami dapat membawa perusahaan Anda ke level
              berikutnya.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                <span className="text-label-md font-label-md">Konsultasi Gratis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed">speed</span>
                <span className="text-label-md font-label-md">Respon Cepat 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-section-gap relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                  Informasi Kontak
                </h2>
                <p className="font-body-md text-on-surface-variant mb-8">
                  Kunjungi kantor kami atau hubungi kami melalui kanal komunikasi di bawah ini.
                </p>
              </div>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div
                    key={item.title}
                    className={`flex gap-4 p-6 rounded-2xl bg-white contact-shadow border-l-4 ${item.border} hover:translate-x-1 transition-transform duration-200`}
                  >
                    <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className={`font-headline-lg text-headline-lg ${item.titleColor} mb-1`}>
                        {item.title}
                      </h3>
                      <p
                        className="text-on-surface-variant font-body-md"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex gap-4 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  </div>
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                      Jam Operasional
                    </h3>
                    <ul className="space-y-1 text-on-surface-variant font-body-md">
                      {hourRows.map((row) => (
                        <li key={row.day} className={`flex justify-between gap-8 ${row.closed ? 'text-error' : ''}`}>
                          <span>{row.day}</span>
                          <span className="font-bold">{row.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-12 contact-shadow border border-outline-variant/20">
                <h2 className="font-headline-xl text-headline-xl text-primary mb-8">Kirim Pesan</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="name">
                      Nama Lengkap
                    </label>
                    <input
                      className="bg-surface-container-low border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      id="name"
                      placeholder="Masukkan nama Anda"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="email">
                      Email Bisnis
                    </label>
                    <input
                      className="bg-surface-container-low border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      id="email"
                      placeholder="nama@perusahaan.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="company">
                      Perusahaan
                    </label>
                    <input
                      className="bg-surface-container-low border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      id="company"
                      placeholder="Nama instansi/perusahaan"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="subject">
                      Subjek
                    </label>
                    <select
                      className="bg-surface-container-low border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      id="subject"
                    >
                      <option>Konsultasi Digital</option>
                      <option>Kemitraan</option>
                      <option>Dukungan Teknis</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="message">
                      Pesan Anda
                    </label>
                    <textarea
                      className="bg-surface-container-low border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      id="message"
                      placeholder="Bagaimana kami bisa membantu Anda?"
                      required
                      rows="5"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={status !== 'idle'}
                      className={`w-full md:w-auto text-on-primary px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg ${
                        status === 'success'
                          ? 'bg-emerald-600'
                          : status === 'error'
                          ? 'bg-error hover:bg-error'
                          : 'bg-primary hover:bg-primary-container'
                      }`}
                    >
                      {status === 'idle' && (
                        <>
                          <span>Kirim Pesan</span>
                          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                        </>
                      )}
                      {status === 'sending' && (
                        <>
                          <span className="material-symbols-outlined animate-spin">sync</span>
                          <span>Mengirim...</span>
                        </>
                      )}
                      {status === 'success' && (
                        <>
                          <span className="material-symbols-outlined">check_circle</span>
                          <span>Berhasil Terkirim!</span>
                        </>
                      )}
                      {status === 'error' && (
                        <>
                          <span className="material-symbols-outlined">error</span>
                          <span>Gagal, Coba Lagi</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden contact-shadow group">
          <div className="w-full h-full bg-surface-container-highest relative">
            <div
              className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsLoiz4Duw57HrnZXaN7SqvRi46pIapXIdGPxxC6MeNOQvJquO2WVR8rz4eNhUq2qna_v9-By35ED3-jts49O2zt44lPVAkGlxaRCU8WDGN7G4SskH2NCB0VW2BiNd2e7XktmImcPxCyHaWSat1N53v3Z0Tn4DLs4GYJudF-9LXUUCYw39skI6jh-BKsW9trx7WyypLxvrytVcJDSc9gdPX__1YQFe4SJ7WHzGEcwo_YIFj8pZWUTh210TqDsV0KDO1Fs3LGKZEWE')",
              }}
            />
          </div>
          <div className="absolute top-8 left-8 p-6 glass-card rounded-xl max-w-sm">
            <h4 className="font-headline-lg text-primary mb-2">Lokasi Strategis</h4>
            <p className="text-on-surface-variant font-body-md mb-4">
              Terletak di pusat bisnis Jakarta, memudahkan akses kolaborasi bagi klien-klien
              korporat kami.
            </p>
            <a
              className="text-secondary font-bold flex items-center gap-2 hover:underline"
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka di Google Maps
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tertiary text-on-tertiary">
        <div className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="space-y-6">
            <span className="font-headline-lg text-headline-lg font-bold text-on-tertiary">
              HiTech Aksara Digital
            </span>
            <p className="text-on-tertiary/70 font-body-md">
              Membangun masa depan digital Indonesia melalui solusi teknologi yang inovatif dan
              terpercaya.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Perusahaan</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Karir IT
                </a>
              </li>
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Layanan Digital
                </a>
              </li>
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Studi Kasus
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a className="text-on-tertiary/70 hover:text-on-tertiary hover:translate-x-1 transition-all inline-block" href="#">
                  Syarat &amp; Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-white/10 text-center md:text-left">
          <p className="text-on-tertiary/60 text-body-md">
            © 2024 PT. HiTech Aksara Digital. All rights reserved.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
