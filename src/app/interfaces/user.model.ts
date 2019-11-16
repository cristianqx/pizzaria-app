import { Empresa } from './empresa.model';
import { Permission } from './permission.model';
import { PerfilResource } from './perfil-resource';

export interface User {
    id: number,
    login: string,
    senha: string,
    nome: string,
    sexo : string,
    data_cadastro : Date,
    email : string,
    perfil : PerfilResource,
    telefone : number,
    telefone2 : number,
    endereco : string,
    cep : number,
}