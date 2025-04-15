import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabaseConfig/supabaseClient'
import Insert from './components/Insert'

function App() {
  return (
    <>
    <Insert />
    </>
  )
}

export default App
