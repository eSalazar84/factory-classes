import { Eficiencia, Motor } from "./motor";

export enum CombustibleType {
  aceite = "aceite",
  gas_oil = "gas_oil",
  GNC = "GNC",
  nafta = "nafta",
}

export class MotorCombustion extends Motor {
  protected cilindros: number;
  protected tipoCombustible: CombustibleType;
  constructor(id: string,potenciaHP:number,eficiencia:Eficiencia,fabricante:string,cilindros:number,tipoCombustible:CombustibleType) {
    super(id,potenciaHP,eficiencia,fabricante);
    this.cilindros=cilindros;
    this.tipoCombustible=tipoCombustible
  }
  getInfoCombustion(): string {
    return `
    Modelo = ${this.id}
    Cilindros = ${this.cilindros}V
    Tipo de Combustible = ${this.tipoCombustible}
    `;
  }
}
