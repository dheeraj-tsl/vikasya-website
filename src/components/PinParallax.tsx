'use client'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function PinParallax() {
  const wrap = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrap.current || !inner.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap.current,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 0.6,
      },
    })
    tl.fromTo(inner.current, { yPercent: 0 }, { yPercent: -40, ease: 'none' })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="relative h-[200svh]">
      <div ref={wrap} className="sticky top-0 h-screen grid place-items-center bg-[#0b0f13]">
        <div ref={inner} className="max-w-3xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold">Today’s Panchang</h2>
          <p className="mt-4 text-white/70">Live tithi, Nakshatra, and right-time windows.</p>
          <div className="mt-8 rounded-2xl border border-white/10 p-6">
            <div className="grid grid-cols-3 gap-4 text-left">
              <div><p className="opacity-70">Tithi</p><p>Shukla Dwitiya</p></div>
              <div><p className="opacity-70">Nakshatra</p><p>Rohini</p></div>
              <div><p className="opacity-70">Shubh Muhurat</p><p>12:10–1:35 PM</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
