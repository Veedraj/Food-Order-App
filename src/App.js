import {Fragment , useState} from 'react'
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [modal,showModal] = useState(false);
  const closeModal = () =>{
    showModal(false);
  }
  const openModal = () => {
    showModal(true);
  }
  return (
    <CartProvider>
      {modal && <Cart onClose={closeModal}/>}
      <Header onOpen={openModal}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App;
