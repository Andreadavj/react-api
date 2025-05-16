const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json())

// Datos de pizzas
const pizzas = [
  {
    id: "p001",
    name: "Pizza Napolitana",
    price: 12990,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    desc: "Deliciosa pizza con los ingredientes tradicionales de la cocina italiana. La combinación perfecta de mozzarella, tomates frescos, jamón y orégano te transportará directamente a Nápoles.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "p002",
    name: "Pizza Vegetariana",
    price: 11990,
    ingredients: ["mozzarella", "tomates", "pimentón", "cebolla", "champiñones"],
    desc: "Una opción saludable y deliciosa para los amantes de las verduras. Esta pizza combina mozzarella con tomates, pimentón, cebolla y champiñones frescos.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2068272_640_cl.jpg?alt=media&token=93f2f191-606f-4d35-a1ff-0deb5b85a98a",
  },
  {
    id: "p003",
    name: "Pizza Hawaiana",
    price: 10990,
    ingredients: ["mozzarella", "tomates", "jamón", "piña"],
    desc: "La combinación agridulce que divide opiniones. Nuestra pizza hawaiana lleva mozzarella, tomates, jamón y piña fresca para darte ese sabor tropical que tanto gusta.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-3007395_640_cl.jpg?alt=media&token=76a42061-c166-42d4-89b2-08b8333be231",
  },
  {
    id: "p004",
    name: "Pizza Americana",
    price: 13990,
    ingredients: ["mozzarella", "tomates", "pepperoni", "orégano"],
    desc: "Un clásico americano que nunca falla. La pizza americana con mozzarella, tomates, pepperoni y orégano es perfecta para los amantes de los sabores intensos.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1949183_640_cl.jpg?alt=media&token=d4e0a0db-af09-4edf-b6f1-9d54c47cfcc0",
  },
  {
    id: "p005",
    name: "Pizza Española",
    price: 14990,
    ingredients: ["mozzarella", "tomates", "jamón serrano", "aceitunas"],
    desc: "Un toque de España en cada bocado. Esta pizza combina mozzarella, tomates, jamón serrano y aceitunas para brindarte un sabor mediterráneo inigualable.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Ffocus-pizza.jpg?alt=media&token=592fd4b6-5c27-4047-8e1b-33d1f5d108c3",
  },
  {
    id: "p006",
    name: "Pizza Cuatro Quesos",
    price: 15990,
    ingredients: ["mozzarella", "queso azul", "queso de cabra", "queso parmesano"],
    desc: "Para los amantes del queso, esta pizza es un sueño hecho realidad. Combina cuatro quesos diferentes: mozzarella, queso azul, queso de cabra y queso parmesano.",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2802332_640_cl.jpg?alt=media&token=5a5d9690-0126-422a-8c4e-e07bce4f4b6e",
  },
]

// Rutas
app.get("/api/pizzas", (req, res) => {
  res.json(pizzas)
})

app.get("/api/pizzas/:id", (req, res) => {
  const { id } = req.params
  const pizza = pizzas.find((p) => p.id === id)

  if (pizza) {
    res.json(pizza)
  } else {
    res.status(404).json({ message: "Pizza no encontrada" })
  }
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
