import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function getRiskColor(ratio) {
  if (ratio <= 130) return 'text-janus-green'
  if (ratio <= 160) return 'text-yellow-500'
  return 'text-janus-red'
}

export default function TransparencyPanel() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get('/api/stabilizer/logs').then((res) => {
      setLogs(res.data.slice(0, 10))
    })
  }, [])

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 text-janus-black">
      <h2 className="text-2xl font-bold mb-4 text-janus-purple flex items-center gap-2">
        AI Transparency Logs
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        These are the most recent decisions made by the Janus AI engine.
      </p>
      <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
      {logs.map((log, idx) => (
  <div key={idx} className="py-2">
    {log.type === 'nudge' ? (
      <>
        <div className="flex justify-between font-semibold text-janus-red">
          <span>🔥 {log.token} Nudge</span>
          <span>
            {log.nudge?.toUpperCase() || "N/A"} {log.amount || 0} tokens
          </span>
        </div>
        <div className="text-xs text-gray-500">
          Target: ${log.target?.toFixed(2) || "–"} — Observed: ${log.observed?.toFixed(2) || "–"}
        </div>
        <div className="text-xs italic text-gray-400">
          Reason: {log.reason || "No explanation"} (PID: {log.pid_value ?? "–"})
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-between font-semibold">
          <span>{log.token}</span>
          <span>${log.price?.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500">Volatility: {log.volatility}</div>
        <div className={`font-semibold ${getRiskColor(log.ratio)}`}>
          Suggested Ratio: {log.ratio}%
        </div>
        <div className="text-xs italic text-gray-400">{log.notes}</div>
      </>
    )}
  </div>
))}

      </div>
    </div>
  )
}