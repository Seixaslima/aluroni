import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'Components/TagsPrato';
import NotFound from 'Pages/NotFound';
import PaginaPadrao from 'Components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if (!prato) {
    return (<NotFound />);
  }
  return (
    <PaginaPadrao>
      <button type='button' className={styles.voltar} onClick={() => navigate(-1)}>
        {'< voltar'}
      </button>
      <section className={styles.container}>
        <h3 className={styles.titulo}>
          {prato.title}
        </h3>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato} />
        </div>
      </section>
    </PaginaPadrao>
  );
}