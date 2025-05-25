import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'

import CV from '../../assets/CV_SaadBinNadeem_2023.pdf'
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const [isActive, setActive] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (isLightTheme) {
      html.classList.add('light')
    } else {
      html.classList.remove('light')
    }
  }, [isLightTheme])

  function toggleTheme() {
    setIsLightTheme(prev => !prev)
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Muhammad Saad Bin Nadeem</span>
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={CV} download className="button">
            CV
          </a>

          {/* Theme toggle button with SVG icons */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '1rem',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isLightTheme ? (
              // Sun icon for light mode with black color
              <Sun style={{ color: 'black' }} />
            ) : (
              // Moon icon for dark mode with default color (or specify one)
              <Moon />
            )}
          </button>

        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        ></div>
      </Router>
    </Container>
  )
}
