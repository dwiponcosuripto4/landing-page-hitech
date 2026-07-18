import { caseStudies } from '../data'

function Metric({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <div className="text-primary font-bold text-headline-lg">{value}</div>
        <div className="text-[12px] text-on-surface-variant uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  )
}

function CaseStudy({ study }) {
  return (
    <div
      className={`tonal-layer-1 tonal-layer-2 rounded-2xl p-8 md:p-12 transition-all flex flex-col ${
        study.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-12`}
    >
      <div className="md:w-1/3 shrink-0">
        <div className="aspect-video md:aspect-square rounded-xl overflow-hidden mb-6">
          <img
            className="w-full h-full object-cover"
            src={study.image}
            alt={study.title}
          />
        </div>
        <div className="space-y-4">
          {study.metrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <span className="text-secondary font-label-md text-label-md mb-2 block">
          {study.tags}
        </span>
        <h3 className="font-headline-xl text-headline-xl text-primary mb-6">
          {study.title}
        </h3>
        <div className="space-y-8">
          <div>
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">warning</span>
              Tantangan
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {study.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">lightbulb</span>
              Solusi Kami
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {study.solution}
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            Baca Selengkapnya
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
            Studi Kasus Mendalam
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Mempelajari tantangan nyata yang dihadapi klien kami dan bagaimana solusi
            teknologi kami memberikan dampak terukur.
          </p>
        </div>
        <div className="space-y-gutter">
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
