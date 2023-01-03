export class Usuario{
    username: string='';
    password: string='';
    confirmPassword? :string
}

export class Cliente{
    id: number=0;
    tipoIdentificacion: string ='';
    identificacionNumero: string='';
    nombre: string = '';
    direccion: string = '';
    telefono: string='';
    correoElectronico: string= '';
    

}

export class Servicio{
    id:number=0;
    descripcion: string ='';
    precioUnitario: number=0.0;
    usuarioId:number=0

}

export class Detalles{
    cantidad: number;
    precioUnitario: number;
    total: number;
    servicioId: number;
}

