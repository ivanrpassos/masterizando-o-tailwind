import { Home, User, BarChart2, Layers, CheckSquare, Flag } from 'lucide-react'
import { NavItem } from './NavItem'

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart2} />
      <NavItem title="Projects" icon={Layers} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={User} />
    </nav>
  )
}
