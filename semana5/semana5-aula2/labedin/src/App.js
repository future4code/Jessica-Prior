import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import foto from './imgs/perfil.jpg'
import foto1 from './imgs/compumania.jpg'
import foto2 from './imgs/logo_lar.png'
import foto3 from './imgs/email.jpg'
import foto4 from './imgs/endereço.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Jessica Prior" 
          descricao="Olá, me chamo Jessica, tenho 24 anos e desde que
          me conheço por gente adoro mexer em computadores e afins.
          Meus hobbies são: ler livros e mangás, assistir animes e séries,
          amo de coração andar de moto e curto variados jogos.
          Não tenho uma profissão específica, faço alguns 'bicos' a noite
          de moto como entregador."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem={foto3}
          descricao="Email: jesckaprior@gmail.com"
        />
        <CardPequeno
          imagem={foto4}
          descricao="Endereço: Em algum lugar desse mundão ai - Terra"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={foto1} 
          nome="Compumania" 
          descricao="Auxiliar de administração e técnico de informática." 
        />
        
        <CardGrande 
          imagem={foto2}
          nome="Lar Cooperativa Agroindustrial" 
          descricao="Auxiliar de produção durante 5 meses, Operador de maquinas industriais por mais 1 ano e 1 mês." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
