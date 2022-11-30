import { AiFillCloseCircle } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <AiFillCloseCircle className="deletar" onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador

//toda vez que importamos algo sem {} é pq este componente vem de um export default
//qdo importamos com {} a informação vem sempre de uma lib por exemplo, desta forma
//é como se estivéssemos 'limitando' o q estamos importando.
//bom lembrar que um componente (módulo) só pode ter UM export default, mas pode ter 
//vários exports