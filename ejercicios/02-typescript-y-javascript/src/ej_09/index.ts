type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function rebajar(catalogo: Producto[], id: number): Producto[] {
  return catalogo.map((p) => {
    if (p.id === id) {
      const nuevoPrecio = Math.round(p.precio * 0.9 * 100) / 100
      return { ...p, precio: nuevoPrecio, rebajado: true }
    }
    return p
  })
}

export function ejercicio09(): void {
  console.log('Tras rebajar ID 3:', rebajar(productos, 3))
  console.log('Original sin cambios:', productos)
  console.log('Rebajar ID 99:', rebajar(productos, 99))
}
