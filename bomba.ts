export class Bomba {
  private id: string;
  private caudalEntrada: number;
  private caudalSalida: number;
  private fabricante: string;
  constructor(
    id: string,
    caudalEntrada: number,
    caudalSalida: number,
    fabricante: string
  ) {
    this.id = id;
    this.caudalEntrada = caudalEntrada;
    this.caudalSalida = caudalSalida;
    this.fabricante = fabricante;
  }
  getBomb(): string {
    return `
            id bomba = ${this.id}
            Caudal de Entrada = ${this.caudalEntrada}ltr/m.(medido en mm)
            Caudal de Salida = ${this.caudalSalida}ltr/m.(medido en mm)
            Fabricante = ${this.fabricante}
            `;
  }
  getReadBomb(dataSearch: string, array: Bomba[]): any {
    const data = array.filter((listado) => listado.id === dataSearch);
    if (data) {
      return data;
    } else {
      return `${dataSearch} No existe en el sistema-`;
    }
  }
  getDeleteBomb(dataDelete: string, array: Bomba[]): any {
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
  getEditBomb(dataSearch: string, array: Bomba[], datoAcambiar: string) {
    const modificarDato: Bomba = this.getReadBomb(dataSearch, array);
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
