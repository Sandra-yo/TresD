export class ProductsScheme {
  id?: string;
  nombre: string;
  imagen: string;
  categoriaId: string; // category ID
  costo: number;
  cantidad: number;
  estado: string; // existente - agotado
  proveedorId: string; // proveedor ID
  creado: string;
  descripcion?: string;
  comprar?: number;
}
