import React from 'react'
import TransparencyPanel from './components/TransparencyPanel'

function App() {
  return (
    <div className="min-h-screen bg-white text-white p-6">
      <div className="max-w-3xl mx-auto">
      <img
          src="/janus.png"
          alt="Janus Logo"
          className="mx-auto mb-4 h-16"
        />
        <h1 className="text-3xl font-extrabold text-center text-janus-blue mb-8">
          Janus AI Transparency Dashboard
        </h1>
        <TransparencyPanel />
      </div>
    </div>
  )
}

export default App
