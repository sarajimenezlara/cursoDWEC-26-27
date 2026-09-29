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

function buscarProducto(catalogo: Producto[], id: number): Producto | null {
  const encontrado = catalogo.find((producto) => producto.id === id)

  if (encontrado) {
    return encontrado
  }

  return null
}

export function ejercicio04(): void {
  console.log('Catálogo:', productos)
  console.log('ID 3:', buscarProducto(productos, 3))
  console.log('ID 99:', buscarProducto(productos, 99))
  console.log('Array vacío:', buscarProducto([], 1))
}
