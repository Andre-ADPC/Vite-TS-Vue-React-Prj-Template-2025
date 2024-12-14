import React from 'react'
import { Outlet } from '@tanstack/react-router'

export const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to the React App</h1>
      <Outlet />
    </div>
  )
}
