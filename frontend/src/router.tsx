import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Booked } from './pages/booked'
import { Search } from './pages/search'
import { System } from './pages/system'

export function Router() {
  return (
    <Routes>
      <Route path="/search" Component={Search} />
      <Route path="/booked" Component={Booked} />
      <Route path="/system" Component={System} />
      <Route path="/" Component={Home} />
    </Routes>
  )
}
