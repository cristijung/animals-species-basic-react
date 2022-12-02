import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [animal, setAnimal] = useState('')
    const [raca, setRaca] = useState('')
    const [imagem, setImagem] = useState('')
    const [especie, setEspecie] = useState('')
    const [nomeEspecie, setNomeEspecie] = useState('')
    const [corSecao, setCorSecao] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', animal, raca, imagem, especie )
        aoCadastrar({
            animal,
            raca,
            imagem,
            especie
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card de animais.</h2>
                <Campo
                    obrigatorio={true}
                    label='Animal'
                    placeholder='Digite o tipo de animal '
                    valor={animal}
                    aoAlterado={valor => setAnimal(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Raça' 
                    placeholder='Digite a raça '
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Espécie'
                    items={times}  //------------------------------------------------------
                    valor={especie}
                    aoAlterado={valor => setEspecie(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(e) => {
                e.preventDefault()
                cadastrarTime({ nome: nomeEspecie, cor: corSecao})
            }}>
                <h2>Preencha os dados para criar uma nova seção para espécie de animais.</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome da seção '
                    valor={nomeEspecie}
                    aoAlterado={valor => setNomeEspecie(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor da seção '
                    valor={corSecao}
                    aoAlterado={valor => setCorSecao(valor)}
                />               
                
                <Botao texto='Criar uma seção' />
            </form>
        </section>
    )
}

export default Formulario