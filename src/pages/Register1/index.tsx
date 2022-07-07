import { LinkFoward } from '../../components/LinkFoward'
import { MainStyled } from './style'
export default function Register1() {
  return (
    <MainStyled>
      <p>
        Que bom ter você por aqui!<br></br>texto sobre finalizar o cadastro.
        Informar quais vão ser as etapas?
      </p>
      {/* espaço para foto */}
      <LinkFoward destiny="/" text="Concluir cadastro" />
    </MainStyled>
  )
}