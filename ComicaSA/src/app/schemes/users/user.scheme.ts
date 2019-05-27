import { DireccionScheme } from '../direccion/direccion.scheme';
import { TarjetaScheme } from '../tarjeta/tarjeta.scheme';

export class UserScheme {
    nombre?: string;
    uid?: string;
    id?: string;
    apellidos?: string;
    edad?: number;
    tipo?: string; // administrador - usuario
    email: string;
    imagen?: string;
    password?: string;
    confirmarPassword?: string;
    direccion?: DireccionScheme;
    tarjeta?: TarjetaScheme;
    creado?: string;
}
