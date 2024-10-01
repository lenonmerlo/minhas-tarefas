import FiltroCard from '../../componentes/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <aside>
    <S.Aside>
      <S.Campo type="text" placeholder="Pesquisar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importante" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </S.Aside>
  </aside>
)

export default BarraLateral
