import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface IBuscador {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: IBuscador) {
  return (
    <div className={styles.buscador}>
      <input title="busca" type="text" value={busca} onChange={e => setBusca(e.target.value)} />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  )
}