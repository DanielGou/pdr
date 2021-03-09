import './App.css';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import bg from './assets/background.jpg'
import logo from './assets/pdr.jpg'
import img1 from './assets/praiadorosa.jpg'
import img2 from './assets/praia-do-rosa-vista-rosa-norte-trilha.jpg'
import img3 from './assets/rosa-decima.jpg'
import img4 from './assets/praia-do-rosa.jpg'

function App() {
  return (
    <div className="App">
     
        <img className="bgImg" src={bg} alt="hsgugf"/>
        <img src={logo} alt='Praia do rosa'/>
        <div> 
			<div className="text">
        	A Praia do Rosa é o lugar perfeito para aqueles que procuram descanso em meio a natureza e que querem fugir das praias super povoadas. Rosa, como é carinhosamente chamada, está localizada no município de Imbituba, a 90 km de Florianópolis e a apenas 20 km de Garopaba.
			</div>
			
			<img src={img1} id='img' alt='Praia do rosa'/>

			<div className="text">
        	Considerada uma das melhores praias do país e único membro brasileiro do CLUB DAS 30 BAHIAS MAIS BELAS DO MUNDO com sede na França, a região e perfeita para a prática de surf, windsurf e kitesurf, (recebendo todos os anos campeonatos de varias categorias) ou apenas para desfrutar da areia branca e fofinha junto com a família.

			</div>
			<img src={img2} id='img' alt='Praia do rosa'/>
			<div className="text">
        	Inclusa na ÁREA DE PROTEÇÃO AMBIENTAL DA BALEIA FRANCA, e junto com a Lagoa de Ibiraquera, espelho de água que acaba volcando suas águas no mar, famosa pela pesca do saboroso camarão, fazem da preservação da natureza o seu sentido de ser. Nascida como um pequeno povoado de pescadores e transformada numa aldeia cheia de famílias durante o verão, esta pronta para receber voces !!!

			</div>
			
			<img src={img3} id='img' alt='Praia do Rosa'/>
			<div className="text">
			Quem procura por tranquilidade, natureza exuberante, boas opções gastronômicas e atividades ao ar livre encontra tudo isso na Praia do Rosa, cartão-postal do município de Imbituba, Santa Catarina. Com um visual que mistura serra e praia, este destino recebe visitantes o ano inteiro — e não é a toa.
			</div>
			<img src={img4} id='img' alt='Praia do rosa'/>
			<div className="text">
			A Praia do Rosa encanta por vários fatores. As ruas, casas e pousadas contam com uma vibe rústica, de paz e simplicidade. Há estradinhas de terra, respeito à natureza, festas badaladas e, claro, as lindas águas do mar. Ninguém resiste! 
			</div>
			</div>

		<div className='footer'>
			<div>
			@DanielGou
			</div> 
			<div id='right'>
				<a href="https://wa.me/5548996035040"><FaWhatsapp className="icon"/></a>
				<a href="https://www.linkedin.com/in/daniel-gon%C3%A7alves-goulart-3350b91b8/"><FaLinkedinIn className="icon"/></a>
				<a href='https://github.com/DanielGou'><FaGithub className="icon"/></a>
			</div>
		</div>
    </div>
  );
}

export default App;
