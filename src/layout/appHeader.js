import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../assets/styles/modules/appHeader.module.css';


const ROUTES = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Champions", path: "/champions" },
  { id: 2, title: "Server Status", path: "/status" },
]

export default function AppHeader() {
  const { pathname } = useLocation();

  const _renderRoutes = () => (
    ROUTES.map(route => (
      <li key={route.id} className={styles.route}>
        <Link title={route.title} to={route.path} className={pathname === route.path ? styles.routeActive : undefined}>{route.title}</Link>
      </li>
    ))
  );

  return (
    <nav className={styles.appHeader}>
      <div className={styles.appLogo}>
        <Link title="SummonerStats" to={"/"}>SummonerStats</Link>
      </div>
      <ul className={styles.routes}>{_renderRoutes()}</ul>
    </nav>
  )
}
