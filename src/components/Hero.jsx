import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Stats from "./Stats"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const statsRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
      })

      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 30,
        delay: 0.8,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
      })

      gsap.to(imageRef.current, {
        y: -250,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const headlineText = "WELCOMEITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <h1
        ref={headlineRef}
        className="text-4xl md:text-7xl font-bold tracking-[0.6em] text-center flex flex-wrap justify-center"
      >
        {headlineText.split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <Stats ref={statsRef} />
      <img
  ref={imageRef}
  src={`${import.meta.env.BASE_URL}car.png`}
  alt="Car Visual"
  className="absolute bottom-[-120px] w-[400px] md:w-[700px] drop-shadow-2xl will-change-transform pointer-events-none"
/>
    </section>
  )
}

export default Hero