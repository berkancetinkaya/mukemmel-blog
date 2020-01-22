import React from 'react'
import Link from 'next/link'

const Hero = () => (
  <div className="hero">
    <h1 className="hero-title">Berkan Çetinkaya</h1>
    <p>Worth reading articles on web development and programming</p>
    <div className="hero-social-links">
      <Link href="https://medium.com/@">
        <a className="social-link">Linkedin</a>
      </Link>
    </div>
  <style jsx>{`
    .hero {
      text-align: center;
      margin: 3rem 0;
    }
    .hero-title {
      font-size: 3rem;
    }
    .social-link {
      margin-right: 8px;
      color: #333;
    }
  `}</style>
  </div>
)

export default Hero
