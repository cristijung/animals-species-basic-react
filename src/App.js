import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  //usamos os [] pq i useState retorna dois valores --> um array onde 
  //o primeiro item é a variável
  //que precisamos e depois uma função que é responsável por alterar esta var
  //estamos usando o destruct
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Mamíferos',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Aves',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Peixes',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Anfíbios',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Répteis',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Equinodermos',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Poríferos',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[1].nome
    },    
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id ===id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Espécie & Animais</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor = {mudarCorDoTime}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
