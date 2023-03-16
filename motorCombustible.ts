import { Eficiencia, Motor } from "./motor";

export enum CombustibleType {
  aceite = 1,
  gas_oil = 2,
  GNC = 3,
  nafta = 4,
}

class MotorCombustion extends Motor {
  protected id: string;
  protected cilindros: number;
  protected tipoCombustible: CombustibleType;
  constructor(id: string, cilindros: number, tipoCombustible: CombustibleType) {
    super(`generic`, 999, Eficiencia.A, `Volvo`);
    this.id = id;
    this.cilindros = cilindros;
    this.tipoCombustible = tipoCombustible;
  }
  private getCombustible(tipoCombustible: CombustibleType): string {
    const listado = {
      1: "aceite",
      2: "gas_oil",
      3: "GNC",
      4: "nafta",
    };
    return listado[tipoCombustible] || `Desconocido`;
  }
  setMotorCombustible(): string {
    return `
        Modelo = ${this.id}
        Cilindros = ${this.cilindros}
        Tipo de Combustible = ${this.tipoCombustible}
        `;
  }
}

const combustion: MotorCombustion = new MotorCombustion(
  `V8 TURBO`,
  8,
  CombustibleType.nafta
);

console.log(combustion);
