const clients = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmsIUhPdMo2IeiPAGXd-6PIuGoBwvZDZlkRwlYYVZ49SvBaL3Z54aob2ZP8bsdGyCR1Qgm9iOyKPLUZtRWG3qMWeDgP1EndKIyx8iRGwqQ9-JCtqgvqOZmwS6sCRaf0W9DADQIdTzlds5LP8WRXECT96nsGQZQVkoAtsfAx0hQYI3TLUn5ptiIuSeeOeOOBvX6JXZM30LAFcmGyBegqbSHEVm74HcSA3XTK8IbFozxaKwvxe1nkWJRMwWdLQxTB7mDQWusha1WbMI',
    alt: 'Logo bank korporat',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkusRt1Z_M6gvq_-QW61wUZKos38YZjwEOckf27gUnOFb62ZP5Lvvy8lzUN5qV3XOry_-LyHi_UcOdNtXY7tLWGNTk0QtjdRhhw7EKXfl-T1UT8LY2TipFcypJHpzxIo41bRqf_2TVRUxBJRZf-hlfQ3eVak0jVAYL-tvR_a68FDSf7R3BwbU9lbEypuZm2P6iEYitdC7y6KEgVnb6OYa8LdOWWxugBAK3m_dIzV9j75wIKp2VuQe_k_GyuXs_mtz4dIq1bz77Yrg',
    alt: 'Logo perusahaan teknologi',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_dxOaYbF03xD8eyMwVziJ1jLNZSizu0DG0y-3L0I9-E-jua-8q_-jV88B0yx2HRf40cBhiYRQo86Q1FOhevjZeSjVih-eQSNvTwjyqQKsOxRZq4FGKhMvlzPaJiGFePFLeu2FbRRn_nwRqVhLfLyr-9XqP4L2iR-MFC0H62YpJaT2xDt2UgnIEGloDECQISVsnNsg8gbETZRs3VGlG5cdPpjjwi-kXN0efCH4NP_7p9MmK95IZQhuPBcLETAsOq39qKWGqIvgFBI',
    alt: 'Logo logistik global',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWv1V_L2ETTXoeIVllm1RDrO89yAafghvkmunYkvbQGEpHmZjJlEp6TmJewgwRVMeBn6JI4FUU57cETT9hObiryKH434LlvgDf--Ccq9tBGTQ7Uzt2wVnDEQjxZu6GT5ysawvxc_QR1G6HznM0_mmAYjepsV5TwUvBj0Cb96kdQ7Of4VAR2_NRO1ygpYqQYtCDEtE-z5uYDye9BAvcqvsrn2wI3J6nMvJkM8l4KDYKTb151aj2xNlX2YbFSPz8LOphSnsZxpwFgME',
    alt: 'Logo teknologi kesehatan',
  },
]

const testimonials = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKta8RiYH0S8iwI7oDjkng6TUP6U80R3qjzBTb-QJWA-AdrHVt1RtmypJgIkpZhjfKKNAmCa5eRHMMNuY_tFey68-E_cbk4ZPSEQfjM182UnjqffFU82wpw8FWv6MrE5bdqEgATdmH29OeJFlGSqH6Lkz5sCZwrWOwAeq0L5v0ofaZzvGhUOM5JLQmAaQw5nl4KtvzFO4fibqE1f1H3I-cLaacg58lrn0dOtbLSoIugCSKi39_bHqI8uWU5MnV6lTFysuXpNpFnHM',
    name: 'Siti Rahmawati',
    role: 'CTO, Global Tech Solutions',
    quote:
      '"HiTech Aksara Digital membantu kami melakukan migrasi sistem legacy ke arsitektur cloud modern hanya dalam waktu 3 bulan. Efisiensi operasional kami meningkat hingga 40%."',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZT7hj7SwwCMh4OrEjV-wYex2xBN59Kom_pKY9YK8UDyNakkRK8V_isJtzMw3TMYVI-HVPs_UHwIQiMU9DeFdRYuEac27W6DjCAwW3bXmoFnnDG51Z6wY3ndEsqsBiguj78T5vFTIjg-72d9v7LzawhdBYywTgHfqaaD7afer3vIRGvcedjKf3z6neDqp5WgrvdOrnYup4yQgrcvSZY-Q6MUtbXz5Ta8i-3QcWcKOpXyfFOMjCDwLQbUcRTtS8y9AXHOB__u_KECo',
    name: 'Budi Santoso',
    role: 'Director of Ops, Mandiri Logistics',
    quote:
      '"Keahlian teknis mereka sangat mengesankan, tetapi yang benar-benar membedakan adalah komitmen mereka terhadap keamanan data kami selama proses integrasi API."',
  },
]

export default function Testimonials() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="text-primary font-headline-xl text-headline-xl mb-4">
            Dipercaya oleh Pemimpin Industri
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 mt-12">
            {clients.map((c) => (
              <img key={c.alt} className="h-12 w-auto" src={c.src} alt={c.alt} />
            ))}
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-10 rounded-2xl relative">
              <span className="material-symbols-outlined text-secondary text-5xl absolute top-6 right-8 opacity-20">
                format_quote
              </span>
              <div className="flex items-center gap-4 mb-6">
                <img className="w-16 h-16 rounded-full object-cover" src={t.img} alt={t.name} />
                <div>
                  <h4 className="font-headline-lg text-headline-lg text-primary">{t.name}</h4>
                  <p className="text-on-surface-variant font-label-md text-label-md">{t.role}</p>
                </div>
              </div>
              <p className="text-on-surface font-body-lg text-body-lg italic">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
