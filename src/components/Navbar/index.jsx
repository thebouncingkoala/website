import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDarkmode } from '@hooks/useDarkmode'
import classNames from 'classnames'
import Button from '@components/Button'
import Logo from '@images/Logotype.svg'
import {
  TranslateIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import './index.pcss'

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Services',
    href: '/'
  },
  {
    text: 'About us',
    href: '/'
  },
  {
    text: 'Blog',
    href: '/'
  }
]

const Navbar = () => {
  const [tooltip, setTooltip] = useState(false)
  const [offCanvas, setOffCanvas] = useState(false)
  const { darkmode, toggleDarkmode } = useDarkmode()
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setTooltip(false)
  }

  const changeLangEn = () => changeLanguage('en')
  const changeLangEs = () => changeLanguage('es')

  const showTooltip = () => setTooltip(!tooltip)
  const toggleOffCanvas = () => setOffCanvas(!offCanvas)

  const tooltipClasses = classNames('Navbar__Tooltip', {
    'Navbar__Tooltip--Visible': tooltip
  })

  const navbarNavClasses = classNames('Navbar__Nav', {
    'Navbar__Nav--Visible': offCanvas
  })

  return (
    <>
      <header className="Navbar">
        <a className="Navbar__Hotlink" href="/">
          <img className="Navbar__Logo" src={Logo} />
        </a>
        <nav className={navbarNavClasses}>
          <ul className="Navbar__List">
            {links.map((link) => (
              <li className="Navbar__Item" key={link.text}>
                <a className="Navbar__Link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <Button className="Navbar__Button" />
          <div className="Navbar__Actions">
            <div className="Navbar__ActionLanguage">
              <TranslateIcon
                className="Navbar__Icon Navbar__Icon--Language"
                onClick={showTooltip}
              />
              <div className={tooltipClasses}>
                <button
                  className="Navbar__TooltipButton"
                  type="button"
                  onClick={changeLangEs}
                >
                  Español
                </button>
                <button
                  className="Navbar__TooltipButton"
                  type="button"
                  onClick={changeLangEn}
                >
                  English
                </button>
              </div>
            </div>
            {darkmode ? (
              <SunIcon className="Navbar__Icon" onClick={toggleDarkmode} />
            ) : (
              <MoonIcon className="Navbar__Icon" onClick={toggleDarkmode} />
            )}
          </div>
        </nav>
        <div className="Navbar__OffcanvasButton">
          {offCanvas ? (
            <XIcon
              className="Navbar__OffcanvasIcon"
              onClick={toggleOffCanvas}
            />
          ) : (
            <MenuIcon
              className="Navbar__OffcanvasIcon"
              onClick={toggleOffCanvas}
            />
          )}
        </div>
      </header>
    </>
  )
}

export default Navbar
