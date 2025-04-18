import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

import {
    BarChart, Bar
  } from 'recharts'
  

export default function AIChartPanel() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/stabilizer/logs').then(res => {
      const formatted = res.data
        .filter(log => log.type === 'nudge')
        .map((log, index) => ({
          name: `${log.token} ${index}`,
          observed: log.observed,
          target: log.target,
          pid: log.pid_value
        }))
      setData(formatted)
    })
  }, [])

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 text-janus-black mt-8">
      <h2 className="text-2xl font-bold mb-4 text-janus-purple">📊 AI Nudge Tracker</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="observed" stroke="#ff4d4f" name="Observed Price" />
          <Line type="monotone" dataKey="target" stroke="#52c41a" name="Target Price" />
          <Line type="monotone" dataKey="pid" stroke="#1890ff" name="PID Value" />
        </LineChart>
      </ResponsiveContainer>
      <h2 className="text-xl font-bold mt-10 mb-4 text-janus-purple">📦 Collateral Ratio Distribution</h2>
<ResponsiveContainer width="100%" height={200}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="pid" fill="#341164" name="PID Value" />
  </BarChart>
</ResponsiveContainer>

    </div>
  )
}
