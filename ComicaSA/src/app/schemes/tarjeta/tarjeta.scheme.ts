export class TarjetaScheme {
    tipo: string;
    numero: string;
    cvc: string;
    cantidad: number;
    expiracion: {
        mes: string,
        ano: number,
    };
}
