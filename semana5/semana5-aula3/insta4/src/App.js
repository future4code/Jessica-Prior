import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import foto from './components/imagens/jess1.jpg';
import foto1 from './components/imagens/jess.jpg';
import foto2 from './components/imagens/cleb.jpg';
import foto3 from './components/imagens/cleb1.jpg';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Jesckinha'}
          fotoUsuario={foto}
          fotoPost={foto1}
        />

        <Post
          nomeUsuario={'Clebs'}
          fotoUsuario={foto2}
          fotoPost={foto3}
        />
      </div>
    );
  }
}

export default App;
