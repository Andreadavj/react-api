const PizzaCard = ({ pizza }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={pizza.img || "/placeholder.svg"}
          className="card-img-top"
          alt={pizza.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <hr />
          <p className="fw-bold">Ingredientes:</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="text-center text-success mt-3">${pizza.price.toLocaleString("es-CL")}</h4>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-info text-white">Ver más 👀</button>
            <button className="btn btn-danger">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard
 