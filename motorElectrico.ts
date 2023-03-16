import { Eficiencia, Motor } from "./motor";

class MotorElectrico extends Motor {
  protected id: string;
  protected voltaje: string;
  protected consumoKwH: number;
  protected isBajoConsumo: boolean;
  constructor(
    id: string,
    voltaje: string,
    consumoKwH: number,
    isBajoConsumo: boolean
  ) {
    super(`generic`, 999, Eficiencia.A, `Volvo`),
      this.id = id;
      this.voltaje = voltaje;
      this.consumoKwH = consumoKwH;
      this.isBajoConsumo = isBajoConsumo
  }
  switchOnOff(isBajoConsumo: boolean): boolean {
    return (isBajoConsumo = !isBajoConsumo);
  }
  setMotorElectrico(): string {
    return `
        Modelo = ${this.id}
        Voltaje = ${this.voltaje}V
        Consumo = ${this.consumoKwH}KwH
        Es Bajo Consumo? = ${this.isBajoConsumo}
        `;
  }
}

const electrico: MotorElectrico = new MotorElectrico(
  `Robotito`,
  `2000`,
  5240,
  true
);

console.log(electrico);
