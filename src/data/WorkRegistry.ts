export interface WorkItem {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
}

export const workies: WorkItem[] = [
  {
    title: 'My Project',
    description: 'A short description of what this project does.',
    image: '/images/project-one.png',
    technologies: ['Vue', 'TypeScript', 'CSS'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
  {
    title: 'Another Project',
    description: 'Another interesting thing I built.',
    image: '/images/project-two.png',
    technologies: ['Vue', 'Node.js'],
    github: 'https://github.com/...',
  },
]