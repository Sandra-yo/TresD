import { DireccionScheme } from '../direccion/direccion.scheme';

export class ProviderScheme {
    nombre?: string;
    id?: string;
    email: string;
    telefono: string;
    imagen?: string;
    direccion?: DireccionScheme;
    creado: string;
}
