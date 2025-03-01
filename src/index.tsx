import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

interface PizzaProps {
  pizzaData: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
}

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

function Header() {
  return (
    <header className="header">
      <h1>React Pizza Menu</h1>
    </header>
  );
}

function Menu() {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaNum > 0 ? (
        <>
          <p> Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaData={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu! Please come back later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaData }: PizzaProps) {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT!" : pizzaData.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return <footer className="footer">{isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : <p>{`We are happy to welcome you between ${openHour}:00 and ${closeHour}:00`}</p>}</footer>;
}

function Order({ closeHour, openHour }: { openHour: number; closeHour: number }) {
  return (
    <div className="order">
      <p>{`We're open from ${openHour}:00 to ${closeHour}:00! Come visit us or order online!`}</p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
