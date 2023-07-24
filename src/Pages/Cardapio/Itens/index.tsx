import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './Itens.module.scss';
import cardapio from 'data/cardapio.json';

interface IItens {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens(props: IItens) {
  const { busca, filtro, ordenador } = props;
  const [lista, setLista] = useState(cardapio);


  useEffect(() => {
    function testaBusca(title: string) {
      const regex = new RegExp(busca, 'i');
      return regex.test(title);
    }

    function testaFiltro(id: number) {
      if (filtro !== null) return id === filtro;
      return true;
    }

    function ordenaLista(lista: typeof cardapio) {
      switch (ordenador) {
      case 'porcao':
        return lista.sort((a, b) => a.size >= b.size ? 1 : -1);
      case 'qtd_pessoas':
        return lista.sort((a, b) => a.serving >= b.serving ? 1 : -1);
      case 'preco':
        return lista.sort((a, b) => a.price >= b.price ? 1 : -1);
      default:
        return lista;
      }
    }

    const novaLista = cardapio.filter((item) => (
      testaBusca(item.title) && testaFiltro(item.category.id)
    ));
    setLista(ordenaLista(novaLista));

  }, [busca, filtro, ordenador]);


  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}