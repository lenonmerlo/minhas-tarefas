import FiltroCard from '../../componentes/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <aside>
    <S.Aside>
      <S.Campo type="text" placeholder="Pesquisar" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </S.Aside>
  </aside>
)

export default BarraLateral
