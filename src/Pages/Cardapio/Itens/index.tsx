import Item from './Item'
import styles from './Itens.module.scss'
import cardapio from './itens.json'

export default function Itens() {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  )
}