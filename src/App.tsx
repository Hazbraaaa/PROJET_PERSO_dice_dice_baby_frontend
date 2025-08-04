import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="p-1">
      <Outlet />
    </div>
  )
}