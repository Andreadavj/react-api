"use client"

import { usePizzaContext } from "../context/PizzaContext"

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = usePizzaContext()

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Carrito de Compras</h2>
        <div className="alert alert-info mt-4">Tu carrito está vacío. ¡Agrega algunas pizzas deliciosas!</div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Pizza</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    className="rounded"
                  />
                </td>
                <td className="text-capitalize">{item.name}</td>
                <td>${item.price.toLocaleString("es-CL")}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString("es-CL")}</td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                      -
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Resumen del pedido</h5>
            <p className="card-text fw-bold">Total: ${getTotal().toLocaleString("es-CL")}</p>
            <button className="btn btn-success w-100">Ir a Pagar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
