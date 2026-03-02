export interface Project {
  id: number
  year: string
  name: string
  description: string
  techs: string[]
  github: string
  emoji: string
  bgGradient: string
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}
