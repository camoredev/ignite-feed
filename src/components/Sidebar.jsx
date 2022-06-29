import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <Avatar 
          src="https://github.com/camoredev.png"
        /> 
        <strong>Caio Moraes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
