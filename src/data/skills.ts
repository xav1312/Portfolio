export interface Skill {
  name: string
  category: 'Front-end' | 'Back-end' | 'Mobile & Desktop' | 'Tools' | 'Langages'
  level?: number // 1 to 5
}

export const skillsData: Skill[] = [
  // Langages
  { name: 'JavaScript / TypeScript', category: 'Langages', level: 4 },
  { name: 'Python', category: 'Langages', level: 4 },
  { name: 'Java', category: 'Langages', level: 3 },
  { name: 'C / C++', category: 'Langages', level: 3 },
  { name: 'SQL', category: 'Langages', level: 4 },

  // Front-end
  { name: 'React', category: 'Front-end', level: 4 },
  { name: 'Vue.js', category: 'Front-end', level: 3 },
  { name: 'HTML5 / CSS3', category: 'Front-end', level: 5 },
  { name: 'Material UI', category: 'Front-end', level: 4 },
  { name: 'Recharts', category: 'Front-end', level: 3 },

  // Mobile & Desktop
  { name: 'Flutter', category: 'Mobile & Desktop', level: 3 },
  { name: 'React Native', category: 'Mobile & Desktop', level: 2 },
  { name: 'Electron', category: 'Mobile & Desktop', level: 3 },

  // Back-end
  { name: 'Node.js', category: 'Back-end', level: 3 },
  { name: 'Supabase', category: 'Back-end', level: 4 },
  { name: 'Firebase', category: 'Back-end', level: 3 },
  { name: 'Socket.io', category: 'Back-end', level: 3 },

  // Tools
  { name: 'Git / GitHub', category: 'Tools', level: 4 },
  { name: 'Docker', category: 'Tools', level: 3 },
  { name: 'Vite', category: 'Tools', level: 4 },
  { name: 'Figma', category: 'Tools', level: 3 },
]
