//index.js is an entry point
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

//main component taht calls other componenets
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const JSObjStyle = {
  //   color: "blue",
  //   fontSize: "28px",
  //   textTransform: "uppercase",
  // };
  return (
    // <div>
    //   {/* define inline style with JSX, JS objects */}
    //   <h1
    //     style={{ color: "red", fontsize: "48px", textTransform: "uppercase" }}
    //   >
    //     Fast React Pizza Co.
    //   </h1>
    //   <h2 style={JSObjStyle}>Delicious pizzas</h2>
    // </div>

    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza name={pizza.name} />
        ))}
      </div> */}

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            nlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico"
            will work correctly both with client-side routing and a non-root
            public URL. Learn how to configure a non-root public URL by running
            `npm run build`
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
              />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>the page is not ready yet</p>
      )}

      {/* declare the props of the component */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mozarella, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

//receive/use the props from the parent component
function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    //conditional redendring
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
      />{" "}
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/*conditional rendering
				{pizzaObj.soldOut ? (
					<span>Sold Out</span>
				) : (
					<span>{pizzaObj.price}</span>
        )}*/}

        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  //conditional rendering with multiple return
  // if (!isOpen) return <p>were open from {openHour}:00</p>;
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We're currently open */}
      {/* short circuit statement */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>please come in from {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        were open from {openHour}:00 until {closeHour}:00
      </p>
      <button className="btn">order</button>
    </div>
  );
}

//component as an arrow function
//const Test = () =>

//component

// render to the DOM
// select the root element so that react render the app inside of this div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
