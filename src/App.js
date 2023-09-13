import './index.css';
import  Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import {Route, Routes} from 'react-router-dom';
import MagicShopItems from './components/MagicShopItems';
import ShoppingCart from './components/ShoppingCartPage';
import CartProvider from './components/store/CartProvider';
import CompleteOrderForm from './components/CompleteOrderPage';
import AddressAndPayments from './components/AddressAndPayments';
import PotionRecipes from './components/PotionRecipes';


function App() {
  return (
    <CartProvider>

      <Header/>
      <Routes>
      <Route path="/" element={<WelcomePage/>} exact/>
      <Route path="/welcomepage" element={<WelcomePage/>}/>
      <Route path="/magicshop" element={<MagicShopItems/>}></Route>
      <Route path="/potionrecipes" element={<PotionRecipes/>}></Route>
      <Route path="/magicshoppingcart" element={<ShoppingCart key={Math.random()} />
}></Route>
      <Route path="/loginpage" element={<CompleteOrderForm/>}></Route>
      <Route path="/addressandpaymentinfo" element={<AddressAndPayments/>}></Route>
      </Routes>

    </CartProvider>
  );
}

export default App;
