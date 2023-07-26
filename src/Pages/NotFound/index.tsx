import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as NotFOundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames(styles.container, stylesTema.container)}>
      <div className={styles.voltar}>
        <button onClick={() => { navigate(-1); }}>
          {'< voltar'}
        </button>
      </div>
      <NotFOundImage />
    </div>
  );
}