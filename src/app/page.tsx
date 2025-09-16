import Preloader from '@/components/Preloader'
import HeroScroll from '@/components/HeroScroll'
import Features from '@/components/Features'
import PinParallax from '@/components/PinParallax'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Preloader />
      <HeroScroll />
      <Features />
      <PinParallax />
      <section id="download" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold">Get the App</h2>
        <p className="mt-3 text-white/70">Android and iOS coming soon.</p>
        <div className="mt-6 flex gap-3">
          <Link href="#" className="rounded-xl border border-white/20 px-4 py-3 hover:bg-white/10">Play Store</Link>
          <Link href="#" className="rounded-xl border border-white/20 px-4 py-3 hover:bg-white/10">App Store</Link>
        </div>
      </section>
      <footer className="border-t border-white/10 py-12 text-center text-white/60">
        <p>© {new Date().getFullYear()} Vikasya</p>
      </footer>
    </>
  )
}
