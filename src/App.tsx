import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeClientCategory, setActiveClientCategory] = useState('all')
  const appRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLElement>(null)
  const whoWeAreSectionRef = useRef<HTMLElement>(null)
  const whatWeDoSectionRef = useRef<HTMLElement>(null)
  const investmentPortfolioSectionRef = useRef<HTMLElement>(null)
  const ourServicesSectionRef = useRef<HTMLElement>(null)
  const latestNewsSectionRef = useRef<HTMLElement>(null)
  const ourClientsSectionRef = useRef<HTMLElement>(null)
  const ourLeadersSectionRef = useRef<HTMLElement>(null)
  const infilitySectionRef = useRef<HTMLElement>(null)
  const whyChooseUsSectionRef = useRef<HTMLElement>(null)
  const stealthLockSectionRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null
    let lastScrollTop = 0
    let scrollDirection = 0
    let rafId: number | null = null

    const smoothScrollTo = (element: HTMLElement) => {
      if (!appRef.current || isScrollingRef.current) return
      
      // Determine which section is being scrolled to and set active section immediately
      const sectionId = element.id
      // Map section IDs to active section values
      if (sectionId === 'home') {
        setActiveSection('home')
      } else if (sectionId === 'about') {
        setActiveSection('about')
      } else if (sectionId === 'services') {
        // Check if it's the our-services section (not what-we-do)
        if (element.classList.contains('our-services')) {
          setActiveSection('services')
        } else {
          // what-we-do section with id="services" should map to 'about'
          setActiveSection('about')
        }
      } else if (sectionId === 'portfolio') {
        setActiveSection('about')
      } else if (sectionId === 'news') {
        setActiveSection('news')
      } else if (sectionId === 'clients') {
        setActiveSection('clients')
      } else if (sectionId === 'leaders') {
        setActiveSection('clients')
      } else if (sectionId === 'infility') {
        setActiveSection('clients')
      } else if (sectionId === 'why-choose-us') {
        setActiveSection('clients')
      } else if (sectionId === 'stealth-lock') {
        setActiveSection('clients')
      } else if (sectionId === 'contact') {
        setActiveSection('contact')
      }
      
      isScrollingRef.current = true
      const startPosition = appRef.current.scrollTop
      const targetPosition = element.offsetTop
      const distance = targetPosition - startPosition
      const duration = 1200 // Slower, smoother animation (increased from 800ms)
      let startTime: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)

        if (appRef.current) {
          appRef.current.scrollTop = startPosition + distance * easedProgress
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(animateScroll)
        } else {
          isScrollingRef.current = false
          rafId = null
          // Ensure active section is set correctly after scroll completes
          setTimeout(() => {
            if (sectionId === 'home') {
              setActiveSection('home')
            } else if (sectionId === 'about') {
              setActiveSection('about')
            } else if (sectionId === 'services') {
              if (element.classList.contains('our-services')) {
                setActiveSection('services')
              } else {
                setActiveSection('about')
              }
            } else if (sectionId === 'portfolio') {
              setActiveSection('about')
            } else if (sectionId === 'news') {
              setActiveSection('news')
            } else if (sectionId === 'clients') {
              setActiveSection('clients')
            } else if (sectionId === 'leaders') {
              setActiveSection('clients')
            } else if (sectionId === 'infility') {
              setActiveSection('clients')
            } else if (sectionId === 'why-choose-us') {
              setActiveSection('clients')
            } else if (sectionId === 'stealth-lock') {
              setActiveSection('clients')
            } else if (sectionId === 'contact') {
              setActiveSection('contact')
            } else if (sectionId === 'stealth-lock') {
              setActiveSection('clients')
            }
          }, 100)
        }
      }

      rafId = requestAnimationFrame(animateScroll)
    }

    // Expose smoothScrollTo function globally for navigation
    ;(window as any).smoothScrollToSection = smoothScrollTo

    let lastScrollCheck = 0
    let scrollVelocity = 0
    let lastScrollDirection = 0

    const handleScroll = () => {
      if (!appRef.current || isScrollingRef.current) return

      const currentScrollTop = appRef.current.scrollTop
      const now = Date.now()
      const timeDelta = now - lastScrollCheck
      
      // Calculate scroll velocity (pixels per second)
      if (timeDelta > 0) {
        scrollVelocity = Math.abs(currentScrollTop - lastScrollTop) / (timeDelta / 1000)
      }
      
      // Determine scroll direction more accurately
      const currentDirection = currentScrollTop > lastScrollTop ? 1 : (currentScrollTop < lastScrollTop ? -1 : lastScrollDirection)
      scrollDirection = currentDirection
      lastScrollDirection = currentDirection
      lastScrollTop = currentScrollTop
      lastScrollCheck = now

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Wait for scroll to settle before checking - optimized delay for better responsiveness
      scrollTimeout = setTimeout(() => {
        if (!appRef.current || isScrollingRef.current) return

        const scrollTop = appRef.current.scrollTop
        const videoSection = videoSectionRef.current
        const whoWeAreSection = whoWeAreSectionRef.current
        const whatWeDoSection = whatWeDoSectionRef.current
        const investmentPortfolioSection = investmentPortfolioSectionRef.current
        const ourServicesSection = ourServicesSectionRef.current
        const latestNewsSection = latestNewsSectionRef.current
        const ourClientsSection = ourClientsSectionRef.current
        const ourLeadersSection = ourLeadersSectionRef.current
        const infilitySection = infilitySectionRef.current
        const whyChooseUsSection = whyChooseUsSectionRef.current
        const stealthLockSection = stealthLockSectionRef.current
        const contactSection = contactSectionRef.current

        if (!videoSection || !whoWeAreSection || !whatWeDoSection || !investmentPortfolioSection || !ourServicesSection || !latestNewsSection || !ourClientsSection || !ourLeadersSection || !infilitySection || !whyChooseUsSection || !stealthLockSection || !contactSection) {
          // If sections aren't ready yet, wait and try again
          return
        }

        const videoSectionTop = videoSection.offsetTop
        const videoSectionHeight = videoSection.offsetHeight
        const whoWeAreSectionTop = whoWeAreSection.offsetTop
        const whatWeDoSectionTop = whatWeDoSection.offsetTop
        const investmentPortfolioSectionTop = investmentPortfolioSection.offsetTop
        const ourServicesSectionTop = ourServicesSection.offsetTop
        const latestNewsSectionTop = latestNewsSection.offsetTop
        const ourClientsSectionTop = ourClientsSection.offsetTop
        // const ourLeadersSectionTop = ourLeadersSection.offsetTop
        // const infilitySectionTop = infilitySection.offsetTop
        // const whyChooseUsSectionTop = whyChooseUsSection.offsetTop
        // const stealthLockSectionTop = stealthLockSection.offsetTop
        const contactSectionTop = contactSection.offsetTop
        const viewportHeight = window.innerHeight
        const scrollMiddle = scrollTop + viewportHeight / 2

        // Determine active section based on scroll position
        // Home = video section only
        // About Us = Who We Are, What We Do, and Investment Portfolio sections
        // Services = Our Services section
        // News = Latest News section
        // Our Clients = Our Clients section
        // Contact = Contact section
        // Use scrollTop for more accurate detection, with scrollMiddle as fallback
        // const contactSectionHeight = contactSection.offsetHeight
        
        // Check contact section first (most specific)
        if (scrollTop >= contactSectionTop - 100) {
          setActiveSection('contact')
        } else if (scrollTop >= ourClientsSectionTop && scrollTop < contactSectionTop) {
          setActiveSection('clients')
        } else if (scrollTop >= latestNewsSectionTop && scrollTop < ourClientsSectionTop) {
          setActiveSection('news')
        } else if (scrollTop >= ourServicesSectionTop && scrollTop < latestNewsSectionTop) {
          setActiveSection('services')
        } else if (scrollTop >= whoWeAreSectionTop && scrollTop < ourServicesSectionTop) {
          setActiveSection('about')
        } else if (scrollTop < whoWeAreSectionTop - 50) {
          setActiveSection('home')
        } else {
          // Fallback - use scrollMiddle for edge cases
          if (scrollMiddle >= contactSectionTop - 100) {
            setActiveSection('contact')
          } else if (scrollMiddle >= ourClientsSectionTop && scrollMiddle < contactSectionTop) {
            setActiveSection('clients')
          } else if (scrollMiddle >= latestNewsSectionTop && scrollMiddle < ourClientsSectionTop) {
            setActiveSection('news')
          } else if (scrollMiddle >= ourServicesSectionTop && scrollMiddle < latestNewsSectionTop) {
            setActiveSection('services')
          } else if (scrollMiddle >= whoWeAreSectionTop && scrollMiddle < ourServicesSectionTop) {
            setActiveSection('about')
          } else if (scrollMiddle < whoWeAreSectionTop) {
            setActiveSection('home')
          }
        }

        // Only check if scroll has settled (low velocity) - allow faster scrolling
        if (scrollVelocity > 200) return // Don't snap if scrolling too fast

        // Check if we're in the video section
        if (scrollTop >= videoSectionTop && scrollTop < whoWeAreSectionTop) {
          const scrollProgress = (scrollTop - videoSectionTop) / videoSectionHeight
          
          // Only snap if scrolled 50% or more when scrolling down
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(whoWeAreSection)
          }
          // If scrolled less than 50%, don't snap - stay in current section
        }
        // Check if we're in the who-we-are section
        else if (scrollTop >= whoWeAreSectionTop && scrollTop < whatWeDoSectionTop) {
          const scrollProgress = (scrollTop - whoWeAreSectionTop) / whoWeAreSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to what-we-do
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0 && whatWeDoSection) {
            smoothScrollTo(whatWeDoSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to video
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(videoSection)
          }
        }
        // Check if we're in the what-we-do section
        else if (scrollTop >= whatWeDoSectionTop && scrollTop < investmentPortfolioSectionTop) {
          const scrollProgress = (scrollTop - whatWeDoSectionTop) / whatWeDoSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to investment portfolio
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(investmentPortfolioSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to who-we-are
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(whoWeAreSection)
          }
        }
        // Check if we're in the investment portfolio section
        else if (scrollTop >= investmentPortfolioSectionTop && scrollTop < ourServicesSectionTop) {
          const scrollProgress = (scrollTop - investmentPortfolioSectionTop) / investmentPortfolioSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to our services
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(ourServicesSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to what-we-do
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(whatWeDoSection)
          }
        }
        // Check if we're in the our services section
        else if (scrollTop >= ourServicesSectionTop && scrollTop < latestNewsSectionTop) {
          const scrollProgress = (scrollTop - ourServicesSectionTop) / ourServicesSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to latest news
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(latestNewsSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to investment portfolio
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(investmentPortfolioSection)
          }
        }
        // Check if we're in the latest news section
        else if (scrollTop >= latestNewsSectionTop && scrollTop < ourClientsSectionTop) {
          const scrollProgress = (scrollTop - latestNewsSectionTop) / latestNewsSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to our clients
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(ourClientsSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to our services
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(ourServicesSection)
          }
        }
        // Check if we're in the our clients section
        else if (scrollTop >= ourClientsSectionTop && scrollTop < ourLeadersSection.offsetTop) {
          const scrollProgress = (scrollTop - ourClientsSectionTop) / ourClientsSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to our leaders
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(ourLeadersSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to latest news
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(latestNewsSection)
          }
        }
        // Check if we're in the our leaders section
        else if (scrollTop >= ourLeadersSection.offsetTop && scrollTop < infilitySection.offsetTop) {
          const scrollProgress = (scrollTop - ourLeadersSection.offsetTop) / ourLeadersSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to infility
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(infilitySection)
          }
          // If scrolled less than 50% and scrolling up, snap back to our clients
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(ourClientsSection)
          }
        }
        // Check if we're in the infility section
        else if (scrollTop >= infilitySection.offsetTop && scrollTop < whyChooseUsSection.offsetTop) {
          const scrollProgress = (scrollTop - infilitySection.offsetTop) / infilitySection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to why choose us
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(whyChooseUsSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to our leaders
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(ourLeadersSection)
          }
        }
        // Check if we're in the why choose us section
        else if (scrollTop >= whyChooseUsSection.offsetTop && scrollTop < stealthLockSection.offsetTop) {
          const scrollProgress = (scrollTop - whyChooseUsSection.offsetTop) / whyChooseUsSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to stealth lock
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(stealthLockSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to infility
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(infilitySection)
          }
        }
        // Check if we're in the stealth lock section
        else if (scrollTop >= stealthLockSection.offsetTop && scrollTop < contactSection.offsetTop) {
          const scrollProgress = (scrollTop - stealthLockSection.offsetTop) / stealthLockSection.offsetHeight
          
          // If scrolled 50% or more and scrolling down, snap to contact
          if (scrollProgress >= 0.5 && scrollProgress < 0.98 && scrollDirection > 0) {
            smoothScrollTo(contactSection)
          }
          // If scrolled less than 50% and scrolling up, snap back to why choose us
          else if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(whyChooseUsSection)
          }
        }
        // Check if we're in the contact section
        else if (scrollTop >= contactSection.offsetTop) {
          const scrollProgress = (scrollTop - contactSection.offsetTop) / contactSection.offsetHeight
          
          // If scrolled less than 50% and scrolling up, snap back to stealth lock
          if (scrollProgress < 0.5 && scrollDirection < 0) {
            smoothScrollTo(stealthLockSection)
          }
        }
      }, 150) // Optimized delay for better responsiveness while preventing vigorous snapping
    }

    const appElement = appRef.current
    if (appElement) {
      appElement.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
        }
        appElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Set initial active section to 'home' on mount
  useEffect(() => {
    setActiveSection('home')
  }, [])

  // CRITICAL: Force exact viewport heights - NO EXCEPTIONS
  useEffect(() => {
    const forceScrollToTop = () => {
      if (appRef.current && appRef.current.scrollTop !== 0) {
        appRef.current.scrollTop = 0
        appRef.current.scrollTo({ top: 0, behavior: 'auto' })
      }
      if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
      if (document.documentElement.scrollTop !== 0) {
        document.documentElement.scrollTop = 0
      }
      if (document.body.scrollTop !== 0) {
        document.body.scrollTop = 0
      }
    }

    // Watch for scroll changes and immediately reset - but only on initial load
    let scrollCheckInterval: ReturnType<typeof setInterval> | null = null
    let initialLoadComplete = false
    const startScrollWatch = () => {
      if (scrollCheckInterval) clearInterval(scrollCheckInterval)
      
      // Only force scroll to top during initial load (first 2 seconds)
      const startTime = Date.now()
      scrollCheckInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        if (elapsed > 2000) {
          // After 2 seconds, stop forcing scroll to top
          if (scrollCheckInterval) {
            clearInterval(scrollCheckInterval)
            scrollCheckInterval = null
          }
          initialLoadComplete = true
          return
        }
        
        // Only force scroll to top if we're at the very beginning
        if (appRef.current && appRef.current.scrollTop > 0 && appRef.current.scrollTop < 50 && !initialLoadComplete) {
          forceScrollToTop()
        }
      }, 50) // Check every 50ms (less aggressive)
    }

    const setExactHeights = () => {
      const header = document.querySelector('.header') as HTMLElement
      if (!header) return
      
      const viewportHeight = window.innerHeight
      const exactSectionHeight = viewportHeight // Full viewport now, header is fixed

      const videoSection = videoSectionRef.current
      const whoWeAreSection = whoWeAreSectionRef.current
      const whatWeDoSection = whatWeDoSectionRef.current
      const investmentPortfolioSection = investmentPortfolioSectionRef.current
      const ourServicesSection = ourServicesSectionRef.current
      const latestNewsSection = latestNewsSectionRef.current
      const ourClientsSection = ourClientsSectionRef.current
      const ourLeadersSection = ourLeadersSectionRef.current
      const infilitySection = infilitySectionRef.current
      const whyChooseUsSection = whyChooseUsSectionRef.current
      const stealthLockSection = stealthLockSectionRef.current
      const contactSection = contactSectionRef.current

      // Force exact pixel heights with !important via inline styles
      const setHeight = (section: HTMLElement | null, allowOverflow: boolean = false) => {
        if (!section) return
        section.style.setProperty('height', `${exactSectionHeight}px`, 'important')
        section.style.setProperty('min-height', `${exactSectionHeight}px`, 'important')
        section.style.setProperty('max-height', `${exactSectionHeight}px`, 'important')
        section.style.setProperty('margin', '0', 'important')
        section.style.setProperty('margin-top', '0', 'important')
        section.style.setProperty('margin-bottom', '0', 'important')
        // Only set overflow: hidden for video section, allow others to scroll
        if (!allowOverflow) {
          section.style.setProperty('overflow', 'hidden', 'important')
        } else {
          section.style.setProperty('overflow', 'visible', 'important')
        }
      }

      setHeight(videoSection, false) // Video section needs overflow: hidden
      setHeight(whoWeAreSection, true) // Allow scrolling
      setHeight(whatWeDoSection, true) // Allow scrolling
      setHeight(investmentPortfolioSection, true) // Allow scrolling
      setHeight(ourServicesSection, true) // Allow scrolling
      setHeight(latestNewsSection, true) // Allow scrolling
      setHeight(ourClientsSection, true) // Allow scrolling
      setHeight(ourLeadersSection, true) // Allow scrolling
      setHeight(infilitySection, true) // Allow scrolling
      setHeight(whyChooseUsSection, true) // Allow scrolling
      setHeight(stealthLockSection, true) // Allow scrolling
      setHeight(contactSection, true) // Allow scrolling

      // CRITICAL: Force scroll to top after setting heights
      forceScrollToTop()
    }

    // Set immediately and force scroll
    forceScrollToTop()
    setExactHeights()
    startScrollWatch()
    
    // Set again after DOM is fully ready - multiple times to ensure it sticks
    const timeout1 = setTimeout(() => { setExactHeights(); forceScrollToTop(); startScrollWatch() }, 0)
    const timeout2 = setTimeout(() => { setExactHeights(); forceScrollToTop(); startScrollWatch() }, 50)
    const timeout3 = setTimeout(() => { setExactHeights(); forceScrollToTop(); startScrollWatch() }, 100)
    const timeout4 = setTimeout(() => { setExactHeights(); forceScrollToTop(); startScrollWatch() }, 200)
    const timeout5 = setTimeout(() => { setExactHeights(); forceScrollToTop(); startScrollWatch() }, 500)

    // Only prevent scroll on initial load, not during normal scrolling
    const preventScroll = (_e: Event) => {
      // Only prevent if we're at the very top and trying to scroll up
      if (appRef.current && appRef.current.scrollTop === 0) {
        // Allow normal scrolling
        return
      }
    }

    const appElement = appRef.current
    if (appElement) {
      // Remove the aggressive scroll prevention - it's interfering with normal scrolling
      // appElement.addEventListener('scroll', preventScroll, { passive: false, capture: true })
    }

    // Update on resize
    const handleResize = () => {
      setExactHeights()
      forceScrollToTop()
      startScrollWatch()
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
      clearTimeout(timeout5)
      if (scrollCheckInterval) clearInterval(scrollCheckInterval)
      if (appElement) {
        appElement.removeEventListener('scroll', preventScroll, { capture: true } as any)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <div className="app" ref={appRef}>
      <Header activeSection={activeSection} />
      
      <section className="video-hero" id="home" ref={videoSectionRef}>
        <div className="video-container">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/VGA_Holdings_Corporate_Video_1080P.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="who-we-are" id="about" ref={whoWeAreSectionRef}>
        <div className="who-we-are-container">
          <h2 className="section-heading">Who We Are</h2>
          
          <div className="who-we-are-content">
            <div className="who-we-are-text">
              <p className="intro-text">
               VGA was established in 2014 in the Kingdom of Bahrain. We engage in a variety of sectors, such as Brokerage, Consultancy, Chemical Distribution, Oil and Gas Pipeline Services and various other investment portfolios.</p>
              
              <p className="goal-text">
                Goal setting is a powerful process for thinking about your ideal future and for motivating yourself to turn your vision of this future into reality and VGA has the skills and the knowledge to help you do so.  </p>

              <h3 className="team-heading">The VGA Team</h3>
            </div>

            <div className="who-we-are-image">
              <img 
                src="/updatedwhoweare.jpg" 
                alt="VGA Holdings Team" 
                className="team-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do" id="services" ref={whatWeDoSectionRef}>
        <div className="what-we-do-container">
          <h2 className="section-heading">What We Do</h2>
          
          <div className="cards-container">
            <div className="service-card">
              <a 
                href="https://www.agodco.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <img 
                  src="/stealth_lock_pipeline_construction_1768715225384.png" 
                  alt="Oil and Gas Pipeline Services" 
                  className="card-image"
                />
              </a>
              <div className="card-content">
                <h3 className="card-heading">Oil and Gas Pipeline Services</h3>
                <p className="card-text">
                  AGODCO the proprietary owner of the Stealth-Lock technology designs, builds and develops, innovative and technically advanced Pipeline construction technology. But it doesn't stop there. Its Integrated Services Resource typically delivers pipeline construction ten times faster than welding with 2km of constructed carbon steel pipeline per crew, per day. We carry your energy in safe, reliable and responsible ways. We are committed to the communities to which we serve to.
                </p>
                <div className="progress-section">
                  <div className="progress-label">Oil and Gas</div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '50%' }}></div>
                  </div>
                  <div className="progress-percentage">50%</div>
                </div>
              </div>
            </div>

            <div className="service-card">
              <a 
                href="https://revowrap.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <img 
                  src="/stealth_lock_detail_connection_1768715270517.png" 
                  alt="Chemical Distribution" 
                  className="card-image"
                />
              </a>
              <div className="card-content">
                <h3 className="card-heading">Chemical Distribution</h3>
                <p className="card-text">
                  VGA Chemicals is the exlusive distributor of Carbontech in the Kingdom of Bahrain. The place where chemistry, engineering and global expertise are brought together to drive progressive innovation in advanced composite technologies for the emergency repair of critical assets "There is nothing generic about us" we don't just sell pipe wraps; we provide accurate engineering backing to deliver tailored solutions in accordance with ASME Pcc2 and ISO TS 24817.
                </p>
                <div className="progress-section">
                  <div className="progress-label">Chemical Distribution</div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '20%' }}></div>
                  </div>
                  <div className="progress-percentage">20%</div>
                </div>
              </div>
            </div>

            <div className="service-card">
              <a 
                href="https://vgaholdings.com/wp-content/uploads/2024/09/VGA-CONSULTANCY-SERVICES.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <img 
                  src="/Consultancy-service.jpg" 
                  alt="Consultancy Services" 
                  className="card-image"
                />
              </a>
              <div className="card-content">
                <h3 className="card-heading">Consultancy Services</h3>
                <p className="card-text">
                  We are a group of multi-skilled and diverse business advisors experienced in global markets, specifically in the Middle East. Our practitioners have worked in the United States, Europe, and across the Middle East in Finance/Banking, Oil, Gas & Energy, Transaction Advisory, Process Improvement and Project & Programme Management. We're always curious and totally invested in finding the best solution to every challenge.
                </p>
                <div className="progress-section">
                  <div className="progress-label">Consultancy</div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '5%' }}></div>
                  </div>
                  <div className="progress-percentage">5%</div>
                </div>
              </div>
            </div>

            <div className="service-card">
              <a 
                href="https://vgaholdings.com/wp-content/uploads/2024/09/VGA-BROKERAGE-SERVICES.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <img 
                  src="/Brokerage.jpg" 
                  alt="Brokerage Services" 
                  className="card-image"
                />
              </a>
              <div className="card-content">
                <h3 className="card-heading">Brokerage Services</h3>
                <p className="card-text">
                  Connecting the west to the Middle East and to the Far East, VGA has longstanding, mutually respectful relationships with industry leaders; governmental and non-governmental key players not only for Energy and Maritime but related and also much wider sectors of business and industry. VGA's team of experienced, skilled and detail-oriented brokers are at your disposal for executing client orders
                </p>
                <div className="progress-section">
                  <div className="progress-label">Brokerage</div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '5%' }}></div>
                  </div>
                  <div className="progress-percentage">5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-portfolio" id="portfolio" ref={investmentPortfolioSectionRef}>
        <div className="investment-portfolio-container">
          <h2 className="section-heading">Investment Portfolio</h2>
          
          <div className="investment-content">
            <div className="investment-text">
              <p className="portfolio-intro">
                Welcome to VGA Holdings Investment Portfolios, where innovation meets opportunity!
              </p>
              <p className="portfolio-description">
                Our diverse offerings are designed to enhance your entertainment, event planning, and educational experiences. At the forefront is Playsy, our dual reality innovative play center that seamlessly merges creativity and technology for unparalleled fun. We also feature VGA Events, your one-stop shop for event solutions, serving everything from corporate gatherings to VIP events. The Agency introduces Orizon, our groundbreaking 3-step system that transforms sales and marketing strategies for measurable success. Additionally, Playbox encourages kids to step away from screens and engage their craft skills and imagination through hands-on activities. metakid offers interactive dual challenges, teaching kids how to use technology as a tool rather than mere entertainment. Finally, MoneyTree is our initiative focused on fostering financial literacy in children from an early age, ensuring they are well-prepared for the future.
              </p>
              <p className="portfolio-cta">
                Discover the potential of each portfolio by clicking on the logos below and embark on a journey of engagement and growth with VGA!
              </p>
            </div>

            <div className="portfolio-logos-container">
              <div className="portfolio-logo-item">
                <a 
                  href="https://www.playsy.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-logo-link"
                >
                  <img 
                    src="/Playsy-logo.jpg" 
                    alt="Playsy" 
                    className="portfolio-logo"
                  />
                </a>
              </div>

              <div className="portfolio-logo-item">
                <a 
                  href="https://vga-events.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-logo-link"
                >
                  <img 
                    src="/vga-events-logo.jpg" 
                    alt="VGA Events" 
                    className="portfolio-logo"
                  />
                </a>
              </div>

              <div className="portfolio-logo-item">
                <a 
                  href="https://vgaholdings.com/wp-content/uploads/2024/09/The-Agency-3-Step-System.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-logo-link"
                >
                  <img 
                    src="/agency-logo.jpg" 
                    alt="The Agency" 
                    className="portfolio-logo"
                  />
                </a>
              </div>

              <div className="portfolio-logo-item">
                <a 
                  href="https://playboxbh.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-logo-link"
                >
                  <img 
                    src="/Playbox-Logo.jpg" 
                    alt="Playbox" 
                    className="portfolio-logo"
                  />
                </a>
              </div>

              <div className="portfolio-logo-item">
                <img 
                  src="/metakid-logo.jpg" 
                  alt="metakid" 
                  className="portfolio-logo"
                />
              </div>

              <div className="portfolio-logo-item">
                <a 
                  href="https://vgaholdings.com/wp-content/uploads/2024/09/MoneyTree_2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-logo-link"
                >
                  <img 
                    src="/Moneytree_logo.png" 
                    alt="MoneyTree" 
                    className="portfolio-logo"
                  />
                </a>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-label">Investment Portfolio</div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '20%' }}></div>
              </div>
              <div className="progress-percentage">20%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services" id="services" ref={ourServicesSectionRef}>
        <div className="our-services-container">
          <h2 className="section-heading">Our Services</h2>
          
          <div className="our-services-content">
            <p className="services-intro">
              We carry your energy in safe, reliable and responsible ways. We are committed to the communities to which we serve on land and sea. We are part of those communities and as such, we fulfil our obligations to protect and vouch safe all people, all wildlife and our globally shared environment.
            </p>

            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="#d4af37" fillOpacity="0.3"/>
                    <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" fill="#d4af37" fillOpacity="0.2"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Analytics</h3>
                <p className="service-item-text">Involves sifting through massive data sets to discover, interpret, and share new insights and knowledge.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 30 50 Q 50 30 70 50" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 30 50 Q 50 70 70 50" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 25 50 Q 50 25 75 50" stroke="#d4af37" strokeWidth="2" fill="none"/>
                    <path d="M 25 50 Q 50 75 75 50" stroke="#d4af37" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Design</h3>
                <p className="service-item-text">The process of envisioning and planning the creation of interactive and safe systems.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="15" width="60" height="45" rx="3" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <rect x="25" y="20" width="50" height="35" fill="#d4af37" fillOpacity="0.1"/>
                    <rect x="35" y="65" width="30" height="8" rx="2" fill="#d4af37"/>
                    <rect x="40" y="75" width="20" height="5" rx="2" fill="#d4af37"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Consulting</h3>
                <p className="service-item-text">Offering advice and our expertise to client organisations to help them improve their business performance.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" stroke="#d4af37" strokeWidth="4" fill="none"/>
                    <line x1="35" y1="45" x2="35" y2="55" stroke="#d4af37" strokeWidth="4"/>
                    <line x1="65" y1="45" x2="65" y2="55" stroke="#d4af37" strokeWidth="4"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Fair Profits</h3>
                <p className="service-item-text">We grow businesses to profit in fair and sustainable ways.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 25 50 L 40 65 L 75 30" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Best Practice</h3>
                <p className="service-item-text">Is within our DNA in every thing we say and make.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <circle cx="50" cy="50" r="35" stroke="#d4af37" strokeWidth="2" fill="none"/>
                    <line x1="50" y1="50" x2="50" y2="25" stroke="#d4af37" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="50" y1="50" x2="65" y2="50" stroke="#d4af37" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="3" fill="#d4af37"/>
                    <path d="M 45 15 L 50 10 L 55 15" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="50" cy="20" r="2" fill="#d4af37"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Implementation</h3>
                <p className="service-item-text">Having the right integrated services resources in putting a decision or plan into effect.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="40" r="12" fill="#d4af37" fillOpacity="0.3"/>
                    <circle cx="65" cy="40" r="12" fill="#d4af37" fillOpacity="0.3"/>
                    <circle cx="50" cy="40" r="12" fill="#d4af37" fillOpacity="0.3"/>
                    <path d="M 25 55 Q 35 65 50 65 Q 65 65 75 55" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 30 50 Q 40 60 50 60 Q 60 60 70 50" stroke="#d4af37" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Enabling Partners</h3>
                <p className="service-item-text">We join hands for JVs, licensing, acquisitions and more.</p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="25" width="60" height="35" rx="2" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <path d="M 30 50 Q 50 30 70 50" stroke="#d4af37" strokeWidth="3" fill="none"/>
                    <line x1="35" y1="45" x2="35" y2="55" stroke="#d4af37" strokeWidth="3"/>
                    <line x1="65" y1="45" x2="65" y2="55" stroke="#d4af37" strokeWidth="3"/>
                    <rect x="25" y="65" width="50" height="8" rx="1" fill="#d4af37" fillOpacity="0.3"/>
                    <rect x="30" y="75" width="40" height="5" rx="1" fill="#d4af37" fillOpacity="0.3"/>
                  </svg>
                </div>
                <h3 className="service-item-heading">Adding Value</h3>
                <p className="service-item-text">To stakeholders, communities and the families that rely on us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-news" id="news" ref={latestNewsSectionRef}>
        <div className="latest-news-container">
          <h2 className="section-heading">Latest News</h2>
          
          <div className="news-cards-container">
            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/Greekstreet.jpg" 
                  alt="Greek Street Mykonos" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">GREEK STREET "MYKONOS" GETS SOLD TO THE BAHRAIN SOLYMAR GROUP.</h3>
                <p className="news-card-text">
                  Greek Street first opened its doors on the 6th April 2022. In a very short period of time our customers became regulars and Greek Street became the most attractive hang-out spot in the Kingdom of Bahrain. 
                </p>
                <p className="news-card-text">
                  Tap on the "Read More" tab to read our story.
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-01/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/alphalive.jpg" 
                  alt="Greek Street Mykonos TV" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">GREEK STREET "MYKONOS" GOES LIVE ON BAHRAIN & GREEK TV CHANNELS.</h3>
                <p className="news-card-text">
                  Live on Bahrain and ALPHA Greek TV. The founders who have brought "a taste of Mykonos" to the Kingdom of Bahrain. 
                </p>
                <p className="news-card-text">
                  Tap on the "Read More" tab to watch the full interviews and see how their dream became a reality.
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-02/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/CARBONTECH-composite.jpg" 
                  alt="VGA Chemicals Carbontech" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">VGA CHEMICALS SIGNS AGREEMENT WITH CARBONTECH IN BAHRAIN.</h3>
                <p className="news-card-text">
                  VGA Chemicals signs an exclusive agreement with Carbontech for the supply of Revowrap, a very High-End Leak repair product for the Oil & Gas Industry in the Kingdom of Bahrain. 
                </p>
                <p className="news-card-text">
                  Tap on the "Read More" tab to read more about our unique products.
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-03/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/arthurlittle.jpg" 
                  alt="VGA Consultants Arthur D. Little" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">VGA CONSULTANTS SIGN AGREEMENT WITH ARTHUR D. LITTLE IN SAUDI ARABIA.</h3>
                <p className="news-card-text">
                  VGA and Arthur D. Little sign an agreement in Saudi to provide excellent consultancy and planning services for a large Insurance firm. Part of our scope of work is to re-define the insurance industry using maximum optimization, strategic planning and reconfiguration. 
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-04/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/STEALTH-LOGO.png" 
                  alt="Stealth-Lock New Generation" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">STEALTH-LOCK "NEW GENERATION" LAUNCHED.</h3>
                <p className="news-card-text">
                  Automation, remote-control, data capture, stabilizer modules – this new generation of the Stealth-Lock pipeline connection technology is the product of innovation and ingenuity fueled by multimillion-dollar R&D investment. In other words the Ferrari of pipelines.
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-05/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-card-image">
                <img 
                  src="/TENARIS.png" 
                  alt="AGODCO Tenaris Contract" 
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-heading">AGODCO & TENARIS INK STEALTH-LOCK LATIN AMERICA CONTRACT.</h3>
                <p className="news-card-text">
                  After 4 years of relationship development, field trials, end-user qualifications and contractual negotiations, AGODCO and TENARIS, one of the worlds largest tubular goods manufacturers, inked their deal to speed up pipeline installations in Latin America.
                </p>
                <a 
                  href="https://vgaholdings.com/latest-news-06/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="news-read-more-btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-clients" id="clients" ref={ourClientsSectionRef}>
        <div className="our-clients-container">
          <h2 className="section-heading">Meet Our Clients</h2>
          
          <div className="client-categories-tabs">
            <button 
              className={`client-tab ${activeClientCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveClientCategory('all')}
            >
              All
            </button>
            <button 
              className={`client-tab ${activeClientCategory === 'chemicals' ? 'active' : ''}`}
              onClick={() => setActiveClientCategory('chemicals')}
            >
              Chemicals
            </button>
            <button 
              className={`client-tab ${activeClientCategory === 'consultancy' ? 'active' : ''}`}
              onClick={() => setActiveClientCategory('consultancy')}
            >
              Consultancy
            </button>
            <button 
              className={`client-tab ${activeClientCategory === 'oilgas' ? 'active' : ''}`}
              onClick={() => setActiveClientCategory('oilgas')}
            >
              Oil and Gas
            </button>
          </div>

          <div className="clients-logos-container">
            {/* All Category */}
            {activeClientCategory === 'all' && (
              <>
                <div className="client-logo-item">
                  <img src="/Bapco.jpg" alt="BAPCO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/RAFCO.png" alt="RAFCO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/OXY.png" alt="OXY" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/GALFAR.png" alt="GALFAR" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/TENARIS.png" alt="TENARIS" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/PDO.png" alt="PDO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/ADNOC.png" alt="ADNOC" className="client-logo" />
                </div>
              </>
            )}

            {/* Chemicals Category */}
            {activeClientCategory === 'chemicals' && (
              <>
                <div className="client-logo-item">
                  <img src="/Bapco.jpg" alt="BAPCO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/RAFCO.png" alt="RAFCO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/BAPCO-Upstream.jpg" alt="BAPCO Upstream" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/BAPCO-Refining.png" alt="BAPCO Refining" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/BASTS.png" alt="BASTS" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/AMA.jpeg" alt="AMA" className="client-logo" />
                </div>
              </>
            )}

            {/* Consultancy Category */}
            {activeClientCategory === 'consultancy' && (
              <>
                <div className="client-logo-item">
                  <img src="/EBDbahrain.png" alt="EBD Bahrain" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/roladberger.png" alt="Roland Berger" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/syinterprices.png" alt="Syinter Prices" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/arthurlittle.jpg" alt="Arthur D. Little" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/agodco.png" alt="AGODCO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/eztaxi.png" alt="EZ Taxi" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/Greekstreet.jpg" alt="Greek Street" className="client-logo" />
                </div>
              </>
            )}

            {/* Oil and Gas Category */}
            {activeClientCategory === 'oilgas' && (
              <>
                <div className="client-logo-item">
                  <img src="/Tenaris_Logo.png" alt="Tenaris" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/PDO.png" alt="PDO" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/ADNOC.png" alt="ADNOC" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/OXY.png" alt="OXY" className="client-logo" />
                </div>
                <div className="client-logo-item">
                  <img src="/GALFAR.png" alt="GALFAR" className="client-logo" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="our-leaders" id="leaders" ref={ourLeadersSectionRef}>
        <div className="our-leaders-container">
          <h2 className="section-heading">Meet Our Leaders</h2>
          
          <div className="leaders-cards-container">
            <div className="leader-card">
              <div className="leader-image-container">
                <img 
                  src="/ceo.jpg" 
                  alt="Terry Antoniadis - CEO" 
                  className="leader-image"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-title">CEO</h3>
                <h4 className="leader-name">Terry Antoniadis</h4>
                <a 
                  href="https://www.linkedin.com/in/eleftherios-antoniadis-64675820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leader-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image-container">
                <img 
                  src="/managingdirector.png" 
                  alt="Yana Antoniadis - Managing Director" 
                  className="leader-image"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-title">Managing Director</h3>
                <h4 className="leader-name">Yana Antoniadis</h4>
                <a 
                  href="https://www.linkedin.com/in/yana-antoniadis-a66817148/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leader-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image-container">
                <img 
                  src="/compliancedirector.png" 
                  alt="Brett Paul Maclagan - Compliance Director" 
                  className="leader-image"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-title">Compliance Director</h3>
                <h4 className="leader-name">Brett Paul Maclagan</h4>
                <a 
                  href="https://www.linkedin.com/in/brett-maclagan-b250975/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leader-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infility" id="infility" ref={infilitySectionRef}>
        <div className="infility-container">
          <div className="infility-content">
            <div className="infility-image-wrapper">
              <img 
                src="/Infinity-Symbol-On-Beach_1_1200x630.webp" 
                alt="Infinity Symbol" 
                className="infility-image"
              />
            </div>
            <div className="infility-text-wrapper">
              <div className="infility-symbol-wrapper">
                <svg className="infility-symbol" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#f9e79f', stopOpacity: 1}} />
                      <stop offset="25%" style={{stopColor: '#f4d03f', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#d4af37', stopOpacity: 1}} />
                      <stop offset="75%" style={{stopColor: '#f4d03f', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#b8860b', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="goldMetallic2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#f9e79f', stopOpacity: 1}} />
                      <stop offset="30%" style={{stopColor: '#f4d03f', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#d4af37', stopOpacity: 1}} />
                      <stop offset="70%" style={{stopColor: '#f4d03f', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#b8860b', stopOpacity: 1}} />
                    </linearGradient>
                    <filter id="metallicGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
                      <feOffset dx="0" dy="1" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.4"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path 
                    d="M 35 30 
                       A 32.5 20 0 0 1 100 30
                       A 32.5 20 0 0 0 165 30
                       A 32.5 20 0 0 0 100 30
                       A 32.5 20 0 0 1 35 30" 
                    stroke="url(#goldMetallic)" 
                    strokeWidth="5" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#metallicGlow)"
                  />
                </svg>
              </div>
              <blockquote className="infility-quote">
                "Don't get wrapped up in an infinite loop. Life is short so do not waste it, live it, breathe it, love it. Don't be scared to fail as failure will only make you stronger."
              </blockquote>
              <p className="infility-author">— Terry Antoniadis</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us" id="why-choose-us" ref={whyChooseUsSectionRef}>
        <div className="why-choose-us-container">
          <h2 className="section-heading">WHY CHOOSE US?</h2>
          
          <div className="why-choose-us-content">
            <div className="why-choose-us-item">
              <div className="why-choose-us-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="#d4af37" strokeWidth="3" fill="none"/>
                  <circle cx="50" cy="50" r="2" fill="#d4af37"/>
                  <line x1="50" y1="50" x2="50" y2="15" stroke="#d4af37" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="35" y="20" width="8" height="4" rx="1" fill="#d4af37"/>
                  <rect x="57" y="20" width="8" height="4" rx="1" fill="#d4af37"/>
                </svg>
              </div>
              <h3 className="why-choose-us-header">PROJECT TIMELINE RECOVERY</h3>
              <p className="why-choose-us-text">
                We have performed countless project recovery missions whereby conventional welding has failed to deliver pipelines to agreed project deadlines. How about 25-km of 12-inch carbon steel with 47 expansion loops and 12 major road crossings? Timeline – 16 days after two days of mobilization.
              </p>
            </div>

            <div className="why-choose-us-item">
              <div className="why-choose-us-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="25" rx="25" ry="8" stroke="#d4af37" strokeWidth="3" fill="none"/>
                  <rect x="25" y="25" width="50" height="50" rx="3" stroke="#d4af37" strokeWidth="3" fill="none"/>
                  <line x1="30" y1="35" x2="70" y2="35" stroke="#d4af37" strokeWidth="2"/>
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#d4af37" strokeWidth="2"/>
                  <line x1="30" y1="65" x2="70" y2="65" stroke="#d4af37" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="8" fill="#ffffff"/>
                  <ellipse cx="50" cy="75" rx="25" ry="8" stroke="#d4af37" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <h3 className="why-choose-us-header">OIL PRODUCTION ACCELERATION</h3>
              <p className="why-choose-us-text">
                Many national economies and global Oil & Gas operators are dependent on accelerated production volumes in order to maintain margin over and above their fixed operating costs. Through its fast pipeline construction, Stealth-Lock is an important partner to increasing volume production ready for export.
              </p>
            </div>

            <div className="why-choose-us-item">
              <div className="why-choose-us-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 35 20 L 50 45 L 45 45 L 55 75 L 65 75 L 60 50 L 65 50 L 50 20 Z" fill="#d4af37"/>
                </svg>
              </div>
              <h3 className="why-choose-us-header">FASTER FLOW-LINE DEVELOPMENT</h3>
              <p className="why-choose-us-text">
                If you consider that with welding, it might take a four-year contract to complete a gathering network comprising of over 300 hook ups. Then, consider Stealth-Lock that performed its scope in 14 months! Substantial operational cost savings, not to mention the hydrocarbon production brought forward.
              </p>
            </div>

            <div className="why-choose-us-item">
              <div className="why-choose-us-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="35" r="12" fill="#d4af37"/>
                  <path d="M 30 47 Q 30 55, 25 60 L 20 65" stroke="#d4af37" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="70" cy="30" r="12" fill="#d4af37" opacity="0.7"/>
                  <path d="M 70 42 Q 70 50, 75 55 L 80 60" stroke="#d4af37" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
              <h3 className="why-choose-us-header">PROJECT & PROGRAMME MANAGEMENT</h3>
              <p className="why-choose-us-text">
                We are a group of multi-skilled and diverse business advisors experienced in global markets, specifically the Middle East. Our practitioners have worked in the United States, Europe, and across the Middle East in Finance/Banking, Oil, Gas & Energy, Transaction Advisory, Process Improvement and Project & Programme Management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stealth-lock" id="stealth-lock" ref={stealthLockSectionRef}>
        <div className="stealth-lock-container">
          <div className="stealth-lock-content">
            <div className="stealth-lock-image-wrapper">
              <img 
                src="/hqdefault.jpg" 
                alt="Stealth-Lock" 
                className="stealth-lock-image"
              />
            </div>
            <div className="stealth-lock-text-wrapper">
              <p className="stealth-lock-text">Stealth-Lock - The fastest mechanical pipeline in the world</p>
              <div 
                className="stealth-lock-youtube"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <svg className="youtube-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="25" width="70" height="50" rx="8" fill="#FF0000"/>
                  <path d="M 42 35 L 42 65 L 62 50 Z" fill="#FFFFFF"/>
                </svg>
                <span className="youtube-text">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-modal-close"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="video-modal-iframe-wrapper">
              <iframe
                className="video-modal-iframe"
                src="https://www.youtube.com/embed/jvobKDCtljA?autoplay=1"
                title="Stealth-Lock Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <section className="contact" id="contact" ref={contactSectionRef}>
        <div className="contact-container">
          <h2 className="section-heading">Say Hello</h2>
          
          <div className="contact-content">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 28 42 L 28 58 L 48 68 L 52 68 L 72 58 L 72 42 L 52 32 L 48 32 Z" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 32 48 L 32 52 L 50 60 L 68 52 L 68 48" fill="none" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="22" y1="50" x2="28" y2="50" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="72" y1="50" x2="78" y2="52" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3 className="contact-label">Switchboard</h3>
                <p className="contact-value">(+973) 17005357</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 25 L 25 45 L 25 70 L 50 90 L 75 70 L 75 45 Z" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="8" fill="none" stroke="#b0b0b0" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="3" fill="#b0b0b0"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3 className="contact-label">Location</h3>
                <p className="contact-value">Mandarin Tower, Office 101, 10th Floor, Road 3615, Block 436, Building 681, Al Seef, Kingdom Of Bahrain.</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="30" width="60" height="45" rx="4" fill="none" stroke="#b0b0b0" strokeWidth="3"/>
                  <path d="M 20 30 L 50 50 L 80 30" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">info@vgaholdings.com</p>
              </div>
            </div>
          </div>

          <div className="contact-footer">
            <p className="contact-copyright">©Copyright VGA Holdings 2024. Design by VGA</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
