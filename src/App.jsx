import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GithubProfile from './ProfileViewerWithSearch'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileViewerWithSearch />
    </>
  )
}

export default App
