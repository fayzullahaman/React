import person, {
  myElement,
  x,
  flowers,
  greetings,
  inputElement,
} from "./message";

import "./App.css";

import Product from "./Product";
import Student from "./Student";

function App() {
  return (
    <>
      <div className="container">
        <Student />
      </div>
      <div className="container">
        <Product name="Shirt" price="1500" quantity="10" />
        <Product name="Trouser" price="1000" quantity="20" />
        <Product name="jacket" price="2500" quantity="30" />
      </div>

      <div className="container">
        {x}
        <p>Calculation: {5 + 5}</p>
        <p>{flowers}</p>
        <p>{greetings("Rabbany")}</p>
        <p>
          Name: {person.name}, Phone: {person.phone}, Address: {person.address}
        </p>
        <p>{inputElement}</p>

        <p>{myElement}</p>
      </div>
    </>
  );
}

export default App;
