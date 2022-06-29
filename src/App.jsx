import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/camoredev.png',
      name: 'Caio Moraes',
      role: 'Web Developer',
    },
    content: [
      { type:'paragraph', content:'Fala devs 👋' },
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link' , content: '👉 jane.design/doctorcare'},
      {type:'link' , content: '#novoprojeto'},
      {type:'link' , content: '#nlw'},
      {type:'link' , content:  '#rocketseat'}
    ],
    publishedAt: new Date('2022-06-26 18:30:30')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fran-andrade.png',
      name: 'Fran Andrade',
      role: 'Web Developer',
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋' },
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link' , content: '👉 jane.design/doctorcare'},
      {type:'link' , content: '#novoprojeto'},
      {type:'link' , content: '#nlw'},
      {type:'link' , content:  '#rocketseat'}
    ],
    publishedAt: new Date('2022-06-20 18:30:30')
  },
]
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) =>
            <Post
              key={ post.id }
              author={ post.author }
              content={ post.content }
              publishedAt={ post.publishedAt }
            />)}
        </main>
      </div>
    </>
  );
}

export default App;
