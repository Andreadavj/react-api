import pestoMargarita from '../assets/img/marg.jpg';
import criolla from '../assets/img/criolla.png';
import pepperoni from '../assets/img/pepperoni.png';
import todasLasCarnes from '../assets/img/todas-las-carnes.png';
import clasic from '../assets/img/classic.png';

const pizzas = [
  {
    id: "p001",
    name: "Pesto Margarita",
    ingredients: ["Tomate cherry", "Mozzarella", "Pesto"],
    price: 11990,
    image: pestoMargarita,
    description: "Una pizza fresca con pesto casero y mozzarella.",
    quantity: 0
  },
  {
    id: "p002",
    name: "Criolla",
    ingredients: ["Tomate", "Chorizo", "Pimiento verde"],
    price: 12990,
    image: criolla,
    description: "Una pizza intensa y sabrosa al estilo criollo.",
    quantity: 0
  },
  {
    id: "p003",
    name: "Pepperoni",
    ingredients: ["Tomate", "Pepperoni", "Parmesano"],
    price: 13990,
    image: pepperoni,
    description: "Una clásica pizza con abundante pepperoni.",
    quantity: 0
  },
  {
    id: "p004",
    name: "Todas las Carnes",
    ingredients: ["Jamón", "Pepperoni", "Tocino"],
    price: 13990,
    image: todasLasCarnes,
    description: "Una pizza para los amantes de la carne.",
    quantity: 0
  },
  {
    id: "p005",
    name: "Clasic",
    ingredients: ["Aceitunas", "Jamón", "Mozzarella"],
    price: 10990,
    image: clasic,
    description: "Una combinación clásica que nunca falla.",
    quantity: 0
  }
];

export default pizzas;
