"use client"
import { useEffect } from 'react';
import { useRef } from 'react';
import Intro from '../components/LandingPage/Intro';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const { default: LocomotiveScroll } = await import("locomotive-scroll");
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
        locomotiveScroll.init();
      } catch (error) {
        console.error('Error initializing locomotive-scroll:', error);
      }
    };
    initLocomotiveScroll();
  }, []);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const imageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRefs[0].current,
      { scale: 2.5 },
      {
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRefs[0].current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.5,
        },
      }
    );

    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: '-300vw',
        ease: 'none',
        duration: 2.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <main ref={scrollRef}>
      <Intro />
      <section className='scroll-section-outer' ref={triggerRef}>
        <div className='scroll-section-inner' ref={sectionRef}>
          <div className='scroll-section'>
            <video ref={imageRefs[0]} src="https://videos.pexels.com/video-files/2022395/2022395-sd_640_360_30fps.mp4" autoPlay loop />
          </div>
          <div className='scroll-section'>
            <img ref={imageRefs[1]} src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className='scroll-section'>
            <img ref={imageRefs[2]} src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className='scroll-section'>
            <img ref={imageRefs[3]} src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
