import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../Common'

import './styles.css'

export const Nav = () => {
	const [showNav, setShowNav] = useState(false)

	const ref = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowNav(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])

	return (
		<nav ref={ref}>
			<Button
				variant="primary"
				classes="toggle-menu"
				handleClick={() => setShowNav((prev) => !prev)}
				aria-label="toggles navigation on click">
				<img src="/assets/images/hamburger.svg" alt="hamburger menu" />
			</Button>

			<ul className={`nav-list flex ${showNav && 'active'}`}>
				<li>
					<NavLink to="/" onClick={() => setShowNav(false)}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" onClick={() => setShowNav(false)}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/menu" onClick={() => setShowNav(false)}>
						Menu
					</NavLink>
				</li>
				<li>
					<NavLink to="/booking" onClick={() => setShowNav(false)}>
						Reservations
					</NavLink>
				</li>
				<li>
					<NavLink to="/order" onClick={() => setShowNav(false)}>
						Order Online
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" onClick={() => setShowNav(false)}>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
