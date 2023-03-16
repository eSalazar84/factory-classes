export enum Eficiencia {
  A=1,
  B=2,
  C=3,
  D=4,
  E=5,
  F=6,
}

export class Motor {
  protected id: string;
  protected potenciaHP: number;
  protected eficiencia: Eficiencia;
  protected fabricante: string;
  constructor(
    id: string,
    potenciaHP: number,
    eficiencia: Eficiencia,
    fabricante: string
  ) {
    this.id = id;
    this.potenciaHP = potenciaHP;
    this.eficiencia = eficiencia;
    this.fabricante = fabricante;
  }
  private getEficiencia(eficiencia: Eficiencia): string {
    const elementos = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
    };
    return elementos[eficiencia] || "desconocido";
  }
  setMotor():string{
    return `
    Modelo = ${this.id}
    Potencia = ${this.potenciaHP}HP
    Eficiencia = ${this.eficiencia}
    Fabricante = ${this.fabricante}
    `
  }
  getReadMotor(dataSearch: string, array: Motor[]): any {
    const data = array.filter((listado) => listado.id === dataSearch);
    if (data) {
      return data;
    } else {
      return `${dataSearch} No existe en el sistema-`;
    }
  }
}
