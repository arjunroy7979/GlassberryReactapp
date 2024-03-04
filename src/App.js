import './App.css';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import HomeDetails from './components/HomeDetails';
import Navbar from './components/Navbar';
import SubscribeUs from './components/SubscribeUs';

function App() {
  return (
    <div>
      <Navbar />
      <HomeDetails />
      <CardSection />
      <SubscribeUs />
      <Footer />
    </div>
  );
}

export default App;
