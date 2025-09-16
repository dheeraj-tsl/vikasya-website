'use client'
import { useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useEffect } from 'react'

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.fromTo(el, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const items = [
    { title: 'Guruji by your side', desc: 'Precise answers and early Dasha alerts.' },
    { title: 'Satya AI', desc: 'Talk like a friend. Get Krishna’s wisdom.' },
    { title: 'Rituals & Coins', desc: 'Build discipline and earn rewards.' },
    { title: 'Soothing Audios', desc: 'Classical instruments to calm the mind.' },
  ]
  return (
    <section id="get-wise" className="container mx-auto px-6 py-20">
      <div ref={ref}>
        <h2 className="text-3xl md:text-5xl font-semibold">Explore how we guide your growth</h2>
        <p className="mt-3 text-white/70">Holistic well-being, grounded in ancient wisdom.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
              <h3 className="text-xl font-medium">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
