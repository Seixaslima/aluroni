import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';

interface iPaginaPadrao {
  children?: React.ReactNode
}

export default function PaginaPadrao({ children }: iPaginaPadrao) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}