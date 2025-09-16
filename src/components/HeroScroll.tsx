'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Icon3D() {
  const meshRef = useRef<THREE.Mesh>(null!)
  return (
    <Float speed={1} floatIntensity={0.6} rotationIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial roughness={0.4} metalness={0.15} color="#9ad8ff" />
      </mesh>
    </Float>
  )
}

export default function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const perspectiveRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const canvasWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current || !canvasWrapRef.current) return

    gsap.set([perspectiveRef.current], { transformStyle: 'preserve-3d', transformPerspective: 1000 })
    gsap.set([contentRef.current, bgRef.current], { transformStyle: 'preserve-3d' })

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=220%',
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.to(contentRef.current, { z: 600, y: -40, opacity: 0, filter: 'blur(2px)', duration: 1 }, 0)
    tl.to(canvasWrapRef.current, { z: 500, y: -30, x: 30, scale: 1.05, duration: 1 }, 0)
    tl.to(bgRef.current, { z: 300, scale: 1.2, xPercent: -100, duration: 1.2 }, 0.15)
    if (ctaRef.current) tl.to(ctaRef.current, { opacity: 0, duration: 0.6 }, 0.2)

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] bg-[#0b0f13] text-white overflow-hidden">
      <div ref={perspectiveRef} className="relative h-screen w-full [perspective:1000px]">
        <div
          ref={bgRef}
          className="absolute inset-0 -z-10 will-change-transform"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div ref={canvasWrapRef} className="pointer-events-none absolute inset-0 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
          <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 5]} intensity={1.2} />
            <Icon3D />
          </Canvas>
        </div>
        <div ref={contentRef} className="relative z-10 grid h-full place-items-center will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Live Awake, <span className="opacity-90">Grow Steady</span></h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">Conscious living that grows the whole you.</p>
            <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-3">
              <a href="#download" className="rounded-xl px-5 py-3 bg-white text-black hover:bg-white/90 transition">Get the app</a>
              <a href="#get-wise" className="rounded-xl px-5 py-3 border border-white/30 hover:bg-white/10 transition">Explore wisdom</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
