import { Eficiencia, Motor } from "./motor";

export class MotorElectrico extends Motor {
  protected voltaje: number;
  protected consumoKwH: number;
  protected isBajoConsumo: boolean;
  constructor(id: string,potenciaHP:number,eficiencia:Eficiencia,fabricante:string,voltaje:number,consumoKwH:number,isBajoConsumo:boolean) {
    super(id,potenciaHP,eficiencia,fabricante);
    this.voltaje=voltaje;
    this.consumoKwH=consumoKwH;
    this.isBajoConsumo=isBajoConsumo;
  }
  switchOnOff(isBajoConsumo: boolean): boolean {
    return (isBajoConsumo = !isBajoConsumo);
  }
  getInfoElectric(): string {
    return `
    Modelo = ${this.id}
    Voltaje = ${this.voltaje}V
    Consumo = ${this.consumoKwH}KwH
    Es de Bajo Consumo? = ${this.isBajoConsumo}        
    `;
  }
}