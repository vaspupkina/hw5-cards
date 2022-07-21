import './App.css';
import Card from './components/Card';

// Функциональный компонент приложения
function App() {
  return (
    <>
      <Card title="Limited Offer!" text="Limited time offer: Get 10 free Adobe Stock images." link="#" linkText="Get It!">
        <img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" className="card-img-top" alt="..." />
      </Card>    
    </>
  );
}

export default App;
