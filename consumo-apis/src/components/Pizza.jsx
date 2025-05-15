"use client"

import { useState, useEffect } from "react"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        // ID fijo "p001" como se menciona en las instrucciones
        const response = await fetch("http://localhost:5000/api/pizzas/p001")

        if (!response.ok) {
          throw new Error("Error al cargar la pizza")
        }

        const data = await response.json()
        setPizza(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchPizza()
  }, [])

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (error || !pizza) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error || "No se encontró la pizza"}</div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={pizza.img || "/placeholder.svg"} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{pizza.name}</h2>
              <hr />
              <p className="card-text">{pizza.desc}</p>
              <p className="fw-bold">Ingredientes:</p>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h3 className="text-success">Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
                <button className="btn btn-danger">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
