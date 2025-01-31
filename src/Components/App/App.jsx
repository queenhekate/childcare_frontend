import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

function App() {
return <div className="page">
  <div className="page-content">
    <Header />
    <Main />
    <Footer />
  </div>
  <ModalWrapper />
  </div>
}

export default App
