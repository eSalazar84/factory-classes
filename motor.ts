export enum Eficiencia {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

export class Motor {
  protected id: string;
  protected potenciaHP: number;
  protected eficiencia: Eficiencia;
  protected fabricante: string;
  constructor(id: string,potenciaHP:number,eficiencia:Eficiencia,fabricante:string) {
    this.id = id;
    this.potenciaHP=potenciaHP;
    this.eficiencia=eficiencia;
    this.fabricante=fabricante
  }
  getInfo(): string {
    return `
    Modelo = ${this.id}
    Potencia = ${this.potenciaHP}HP
    Eficiencia = ${this.eficiencia}
    Fabricante = ${this.fabricante}        
    `;
  }
  getReadMotor(dataSearch: string, array: Motor[]): any {
    const data = array.filter((listado) => listado.id === dataSearch);
    if (data) {
      return data;
    } else {
      return `${dataSearch} No existe en el sistema-`;
    }
  }
  getDeleteMotor(dataDelete: string, array: Motor[]): any {
    const data = array.findIndex((listado) => listado.id == dataDelete);
    if (data >= 0) {
      array.splice(data, 1);
      console.log(`Equipo eliminado ${dataDelete}`);
      return array;
    } else {
      console.log(
        `Equipo ${dataDelete} NO ha sido eliminado ya que no existe en el sistema-`
      );
    }
  }
  getEditEquip(dataSearch: string, array: Motor[], datoAcambiar: string) {
    const modificarDato: Motor = this.getReadMotor(dataSearch, array);
    if (modificarDato) {
      modificarDato.id = datoAcambiar;
      console.log(
        `El equipo ${this.id} ha sido modificado y ahora se llama ${datoAcambiar}`
      );
      return;
    } else {
      console.log(`El equipo no se ha podido modificar-`);
    }
  }
}