'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900)
    return () => clearTimeout(t)
  }, [])
  if (done) return null
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#0b0f13]">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest opacity-70">Heading to Vikasya…</p>
        <div className="mt-3 h-1 w-52 overflow-hidden rounded bg-white/10">
          <div className="h-full w-1/2 animate-[loader_0.9s_ease-in-out_infinite] bg-white/80" />
        </div>
      </div>
      <style jsx global>{`
        @keyframes loader { 0%{transform:translateX(-50%)} 50%{transform:translateX(100%)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  )
}
