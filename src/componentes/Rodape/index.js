
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="" target="_blank">
                    <img src="/imagens/facebook.png" alt="Acesse nosso Facebook" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <img src="/imagens/twitter.png" alt="Acesse nosso Twitter" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <img src="/imagens/instagram.png" alt="Acesse nosso Instagram" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <span>Espécie & Animais</span>
       </section>
       <section>
        <p>
            Desenvolvido por @CristinaJung
        </p>
       </section>
    </footer>)
}

export default Rodape