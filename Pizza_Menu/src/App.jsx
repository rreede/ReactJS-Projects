import './App.css';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  

  return (
    <>
  <Header/>

    <Footer/>
    </>
  )
}

function Header() {

  const style = {}
  return(
    <header className='className'>
    <h1 style={style} className="header">Fast React Pizza Co.</h1>
    <Menu/>
    </header>
  );
}


function Pizza({pizzaObj}) {

// if (pizzaObj.soldOut) return null;



  return (
  <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />

  <div>


      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredient}</p>
      <span>Price: {pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
  </div>
    </li>
    );
  
}


function Menu() {

const pizzas = pizzaData;

const numPizzas = pizzas.length;

  return(
    <main className='menu'>
    <h2>Our menu</h2>



{numPizzas > 0 ? (
<>
<p>Authentic Italian cuisine, 6 creative dishes to choose from. All rom our stone oven, all organic, all delicious.</p>

<ul className='pizzas'>
      {pizzaData.map((pizza)=> (
      <Pizza pizzaObj={pizza} key={pizza.name}/>
      ))}
    </ul>

    </>
    ) : (<p>We're still working on our menu. Please come back later</p>)
    
}
    


    {/* <Pizza name='Pizza Prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese' photoName='pizzas/spinaci.jpg' price={9.99}/> */}



    </main>
  );
}

function Footer() {

const hour = new Date().getHours();

const openHour = 12;
const closedHour = 22;
const isOpen = hour>= openHour && hour <= closedHour;


  return (

<footer className='footer'>
    { isOpen ? (<Order closedHour={closedHour} openHour={openHour}/>) : (<p>We're  happy to welcome you between {openHour}:00 and {closedHour}:00</p>) }
</footer>)
}

function Order({closedHour, openHour}) {
  return(
    <div className="order">
    <p>Were open from {openHour}:00 to {closedHour}:00. Come visit us or Order.</p>
      <button className="btn">Order</button>

    </div>
  )
}

export default App
