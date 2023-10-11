import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Booked } from './pages/booked'
import { Events } from './pages/events'
import { System } from './pages/system'

export function Router() {
  return (
    <Routes>
      <Route path="/events" Component={Events} />
      <Route path="/booked" Component={Booked} />
      <Route path="/system" Component={System} />
      <Route path="/" Component={Home} />
    </Routes>
  )
}
