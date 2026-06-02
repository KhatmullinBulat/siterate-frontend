import { ClockIcon, GlobeIcon, HouseIcon, ListBulletsIcon, StarIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from "react-router"
import classes from "../css/navbar.module.css"

const data = [
    {
        link: '/',
        label: 'Главная',
        icon: HouseIcon
    },
    {
        link: '/all',
        label: 'Все сайты',
        icon: GlobeIcon
    },
    {
        link: '/category',
        label: 'Категории',
        icon: ListBulletsIcon
    },
    {
        link: '/bests',
        label: 'Лучшие сайты',
        icon: StarIcon
    },
    {
        link: '/recently-added',
        label: 'Недавно добавленные',
        icon: ClockIcon
    }
]

export function Navbar() {

    const [active, setActive] = useState('Главная')

    const links = data.map((item) => (
        <Link
            to={item.link}
            className={classes.link}
            data-active={item.label === active || undefined}
            key={item.label}
            onClick={(e) => {
                e.preventDefault()
                setActive(item.label)
            }}
        >
            <item.icon className={classes.linkIcon} stroke="1.5" />
            <span>{item.label}</span>
        </Link>
    ))

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {links}
            </div>

            <div className={classes.footer}>

            </div>
        </nav>
    )
}