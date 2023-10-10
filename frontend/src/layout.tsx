import { Stack } from '@mui/material'
import { Router } from './router'
import { Nav } from './components/nav'

export function Layout() {
  return (
    <Stack direction={'row'}>
      <Nav />
      <Router />
    </Stack>
  )
}
