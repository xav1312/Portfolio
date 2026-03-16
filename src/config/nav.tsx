import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import HistoryIcon from '@mui/icons-material/History'

export interface NavMenuItem {
  text: string
  icon: React.ReactNode
  path: string
}

export const NAV_ITEMS: NavMenuItem[] = [
  { text: 'Accueil', icon: <HomeIcon />, path: '/' },
  { text: 'Mes Projets', icon: <WorkIcon />, path: '/projects' },
  { text: 'Mon Parcours', icon: <HistoryIcon />, path: '/about' },
]
