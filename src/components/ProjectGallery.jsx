import { useEffect, useState } from 'react'
import { galleryFilters } from '../data'
import { supabase } from '../lib/supabase'

const fallbackProjects = [
  {
    id: 'logismart',
    category: 'Enterprise Resource Planning',
    title: 'LogiSmart Global System',
    tags: ['React.js', 'Python', 'PostgreSQL'],
    span: 'md:col-span-8',
    height: 'h-[500px]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIudSJk7cCKCQqGaTrwnAp886BOyh8594LkZKIDqHncmCmt7pvtkSQCPSjaxrt4F07_Ix49Q_EcJ0KrmB5AaX4Ql_8q96vngkftlO6LneUPa9K3aQ5P3nD_07-5S-6R0ZkPwhZPkP5PiHRJPDwMfvnV9Ee9U1fYHyU52eoCHV3ZHnXraNM_DIdrertxMlDROH9snDKtouH1-ZeBX_bAqMNrDHyjB7PgWtHgw3QZYeHykhSl2gLIGNjWA8dGhAVEZWcDCxPB304OCM',
  },
  {
    id: 'aksarapay',
    category: 'Fintech',
    title: 'Aksara Pay Mobile',
    tags: ['Flutter', 'Go'],
    span: 'md:col-span-4',
    height: 'h-[500px]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwC-V3WaTQqZ9xxVAtcK8Oo5qUUgjdfebCfDHtHzkfO5swkft0vQHpGrUrQZgCYzMW-9IYzZFsPouqRq5uL1N91_9on87yeyBkeLJMN78cXEQZ0k-ZfiRkxIRdybRruV6YKVxvdeWbUKkPCNhRHq9KUGGW9oA6b3Ltby2C5yxyRDz4rFpQSkwjDZB8YgoQUnO5GZM7NwzB6MDVaUhsKE1O_8ud-LwguCPzl6LLVaWAUo5Hh7GnVK63ZBlCOsdd3GM5BLpA-WT7tCg',
  },
  {
    id: 'luxtrade',
    category: 'E-Commerce',
    title: 'LuxTrade Portal',
    tags: ['Next.js'],
    span: 'md:col-span-4',
    height: 'h-[350px]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTC2uY54GXkw2PaekBruiaZpRGiOhDZcJU61jYaOJa8uzg1haDkIQGXWskSaSvyQqMuNXSVwXPnarcEM4hfLB8qxMLkTF1w5cV3cBkxvOZ9-j_iyOsGLwLNU5PfNmO9yAtl0Aut3dL-WRhs5Qj6bqbRbyFIhvsg32mR7rh6igD_BywBhD1GxqJRZvI1odq1FWQeB8dkz9PfMYWGZiAThKCkIPCiw9nKUl1-2U9yUhRbNBK3ld_kf_MNCK4sUPBHMid-MyooU0aSPg',
  },
  {
    id: 'predictive',
    category: 'AI Solutions',
    title: 'Predictive Analytics Engine',
    tags: ['TensorFlow'],
    span: 'md:col-span-4',
    height: 'h-[350px]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI1Uh5Kh9-4yIdi2VVN0OInUyz-aITTY18-8Rxzq3mgDz-o8G25khpmV9GkEtNYYHWh4GQd0MYHt9jqBF0HVjJ5k_pZ_r-erZ7E7BKlX_kbVFf4RTe92ExUpTDTQW9pQIi4i5KcaZjZ7F7gXfEd2FYz1He5xdP8iZPtpA1Jve6w4rSZSkZnAMtXnvFROEGDAvU9T3H238SF9JSVnOVg4_YExzSyQclIu1ALoXK35ocT8BHqEwdvePKo2vpdUq6upvdgwOOup96km0',
  },
  {
    id: 'medilink',
    category: 'HealthTech',
    title: 'MediLink Connect',
    tags: ['Node.js'],
    span: 'md:col-span-4',
    height: 'h-[350px]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIrPrXcuXPVd1WvW2X3MmJbfB53EL5_oSQeS-dBlF6ZZgkdpbZsmyniAMoKJsF8dB54wL5l_T2gtG7ArGhHmDBv48iY20oaGCeC1sx_H8Ak13m6SmD2gfFLJkLtuTs0x4DehxsOmbfuautiKJlhFH75qujXyGghNV6M8Tg3CRtDBz0OwyZ5T9o200jHxVGPUF-oi7h6tDMlalIOQOOVDFYeZljHGqjOd8EPNqwqMGhJ9fyvMt0DK2aoADpOGqnpn4iqdsF_KucXw0',
  },
]

function toCard(p, index) {
  const isLarge = index === 0
  return {
    id: p.id,
    category: p.category,
    title: p.title,
    tags: p.stat ? [p.stat] : [],
    span: isLarge ? 'md:col-span-8' : 'md:col-span-4',
    height: isLarge ? 'h-[500px]' : 'h-[350px]',
    image: p.image_url,
  }
}

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
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    let active = true
    supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true })
      .then(({ data, error }) => {
        if (!active) return
        if (error || !data || data.length === 0) return
        setProjects(data.map(toCard))
      })
    return () => {
      active = false
    }
  }, [])

  const filtered =
    activeFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
