'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined' && !(gsap as any)._scrollTriggerRegistered) {
  gsap.registerPlugin(ScrollTrigger)
  ;(gsap as any)._scrollTriggerRegistered = true
}

export { gsap, ScrollTrigger }
