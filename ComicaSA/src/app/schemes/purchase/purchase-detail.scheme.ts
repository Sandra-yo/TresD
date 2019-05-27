export class PurchaseDetailScheme {
    id?: string;
    cantidad: number;
    userId: string;
    productId: string;
    total: number;
    estado: string; // comprado - en carrito
    creado: string;
    productName: string;
    productImage: string;
}
