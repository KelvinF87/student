"use client"

import { useState } from "react"

const POSInterface = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Producto 1", price: 10, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Producto 2", price: 20, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Producto 3", price: 30, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Producto 4", price: 15, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Producto 5", price: 25, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Producto 6", price: 35, image: "https://via.placeholder.com/100" },
  ])

  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id)
      if (existingItem) {
        return currentCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart((currentCart) =>
        currentCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)),
      )
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Punto de Venta</h1>
      <div style={styles.layout}>
        <div style={styles.productsSection}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <div style={styles.productGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img src={product.image || "/placeholder.svg"} alt={product.name} style={styles.productImage} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} style={styles.addButton}>
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.cartSection}>
          <h2 style={styles.cartTitle}>Carrito</h2>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul style={styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} style={styles.cartItem}>
                  <span>{item.name}</span>
                  <div style={styles.quantityControl}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div style={styles.total}>
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <button style={styles.checkoutButton} disabled={cart.length === 0}>
            Procesar Pago
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },
  productsSection: {
    display: "flex",
    flexDirection: "column",
  },
  searchInput: {
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  cartSection: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
  },
  cartTitle: {
    marginBottom: "15px",
  },
  cartList: {
    listStyleType: "none",
    padding: 0,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "10px",
  },
  total: {
    marginTop: "20px",
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    width: "100%",
  },
}

export default POSInterface

