import { useState } from 'react'
import { galleryFilters, projects } from '../data'

function ProjectCard({ project }) {
  return (
    <div
      className={`${project.span} group relative overflow-hidden rounded-2xl tonal-layer-1 transition-all duration-500`}
    >
      <div
        className={`${project.height} w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
        style={{ backgroundImage: `url('${project.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
        <span className="text-secondary-fixed font-label-md text-label-md mb-2">
          {project.category}
        </span>
        <h3
          className={`text-on-primary font-headline-lg text-headline-lg mb-4 ${
            project.height === 'h-[350px]' ? 'text-lg mb-2' : ''
          }`}
        >
          {project.title}
        </h3>
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`bg-white/10 backdrop-blur-md rounded text-white font-medium ${
                project.height === 'h-[350px]'
                  ? 'px-2 py-1 text-[10px]'
                  : 'px-3 py-1 text-[12px]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('Semua')

  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-label-md text-label-md uppercase tracking-widest block mb-2">
              Our Excellence
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Proyek Unggulan
            </h2>
          </div>
          <div className="flex gap-4">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-label-md transition-colors ${
                  activeFilter === filter
                    ? 'bg-surface-container-high text-primary'
                    : 'hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
