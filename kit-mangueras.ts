export enum MaterialRoscas {PVC,acero,goma,tergopol,plastico,}

export class KitMangueras {
  private id: string;
  private elementos: number;
  private medidaPulgadas: number;
  private roscasMaterial: MaterialRoscas;
  constructor(
    id: string,
    elementos: number,
    medidaPulgadas: number,
    roscasMaterial: MaterialRoscas
  ) {
    this.id = id;
    this.elementos = elementos;
    this.medidaPulgadas = medidaPulgadas;
    this.roscasMaterial = roscasMaterial;
  }
  getMaterialRosca(roscasMaterial: MaterialRoscas): string {
    const materiales = {
      1: "PVC",
      2: "acero",
      3: "goma",
      4: "tergopol",
      5: "plastico",
    };
    return materiales[roscasMaterial] || "No es un material para una rosca";
  }
  getKit(): string {
    return `
            id Kit Manguera = ${this.id}
            Elementos = ${this.elementos}
            Medida en Pulgadas = ${this.medidaPulgadas}"
            Material de las roscas = ${this.}
            `;
  }
  getReadKit(dataSearch: string, array: KitMangueras[]): any {
    const data = array.filter((listado) => listado.id === dataSearch);
    if (data) {
      return data;
    } else {
      return `${dataSearch} No existe en el sistema-`;
    }
  }
  getDeleteKit(dataDelete: string, array: KitMangueras[]): any {
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
  getEditKit(dataSearch: string, array: KitMangueras[], datoAcambiar: string) {
    const modificarDato: KitMangueras = this.getReadKit(dataSearch, array);
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


