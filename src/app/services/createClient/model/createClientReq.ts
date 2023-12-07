export class CreateClientReq {
  documento_vc!: number;
  nombres_vc?: string;
  paterno_vc?: string;
  materno_vc?: string;
  fecha_nacimiento_vc?: Date;
  estado_civil_vc?: string;
  domicilio_vc?: string;
  nacionalidad_vc?: string;
}
