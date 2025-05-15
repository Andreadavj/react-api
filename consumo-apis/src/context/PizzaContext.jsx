"use client"

import { createContext, useState, useEffect, useContext } from "react"

// Crear el contexto
export const PizzaContext = createContext()

// Hook personalizado para usar el contexto
export const usePizzaContext = () => useContext(PizzaContext)

// Proveedor del contexto
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Obtener todas las pizzas
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/pizzas")

        if (!response.ok) {
          throw new Error("Error al cargar las pizzas")
        }

        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        setError(error.message)
        console.error("Error fetching pizzas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  // Función para agregar pizza al carrito
  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id)

    if (existingPizza) {
      setCart(cart.map((item) => (item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }])
    }
  }

  // Función para eliminar pizza del carrito
  const removeFromCart = (id) => {
    const existingPizza = cart.find((item) => item.id === id)

    if (existingPizza.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)))
    }
  }

  // Calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Valores y funciones que se compartirán en el contexto
  const contextValue = {
    pizzas,
    loading,
    error,
    cart,
    addToCart,
    removeFromCart,
    getTotal,
  }

  return <PizzaContext.Provider value={contextValue}>{children}</PizzaContext.Provider>
}
