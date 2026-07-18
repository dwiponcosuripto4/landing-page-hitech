export default function WhatsAppButton() {
  return (
    <a className="fixed bottom-8 right-8 z-[100] group" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
      <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.705-.934-.705-1.782 0-.848.444-1.266.603-1.44.159-.174.348-.217.464-.217.116 0 .232.001.332.005.105.004.246-.04.385.293.144.345.492 1.2.535 1.288.043.087.072.188.014.304-.058.116-.087.188-.174.289-.087.101-.183.226-.261.304-.087.087-.178.182-.077.356.101.174.449.741.964 1.201.662.591 1.22.774 1.394.86.174.088.275.073.376-.044.101-.116.435-.506.551-.68.116-.174.232-.145.391-.087.159.058 1.014.478 1.188.565.174.088.289.13.333.203.043.073.043.419-.101.824z"></path>
        </svg>
        <div className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-outline-variant">
          Butuh Bantuan? Hubungi Kami
        </div>
      </div>
    </a>
  )
}
