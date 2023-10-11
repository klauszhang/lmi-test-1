import { Stack } from '@mui/material'
import { Router } from './router'
import { Nav } from './components/nav'
import { Footer } from './components/footer'

export function Layout() {
  return (
    <Stack direction={'row'}>
      <Nav />
      <Stack direction="column" width="100%" minHeight="100vh">
        <Router />
        <Footer />
      </Stack>
    </Stack>
  )
}
