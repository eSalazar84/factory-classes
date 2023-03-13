export class Equipo {
  private id: string;
  private description: string;
  private manufactureDate: Date;
  private installationDate: Date;
  constructor(
    id: string,
    description: string,
    manufacture: Date,
    installationDate: Date
  ) {
    this.id = id;
    this.description = description;
    this.manufactureDate = manufacture;
    this.installationDate = installationDate;
  }
  getAddEquip(): string {
    if (this.manufactureDate < this.installationDate) {
      return `
        Se agrego el equipo ${this.id} con los siguientes datos:
        Equipo = ${this.id}
        Descripción = ${this.description}
        Fecha de Fabricacion = ${this.manufactureDate}
        Fecha de Instalacion = ${this.installationDate}
        `;
    } else {
      return `La fecha de instalacion no puede ser menor a la fecha de manufactura`;
    }
  }
  getReadEquip(dataSearch: string, array: Equipo[]): any {
    const data = array.filter((listado) => listado.id === dataSearch);
    if (data) {
      return data;
    } else {
      return `${dataSearch} No existe en el sistema-`;
    }
  }
  getDeleteEquip(dataDelete: string, array: Equipo[]): any {
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
  getEditEquip(id: string, array: Equipo[], datoAcambiar: string) {
    const modificarDato:Equipo = this.getReadEquip(id, array);    
    if (modificarDato) {
      modificarDato.id = datoAcambiar;
      console.log(
        `El equipo ${this.id} ha sido modificado y ahora se llama ${datoAcambiar}`
      );
      return
    } else {
      console.log(`El equipo no se ha podido modificar-`);
    }
  }
}

const lavarropas: Equipo = new Equipo(
  `Drean`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
//console.log(lavarropas.getAddEquip());

const lavarropas_2: Equipo = new Equipo(
  `Drean`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
const lavarropas_3: Equipo = new Equipo(
  `Longvie`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
const lavarropas_4: Equipo = new Equipo(
  `LG`,
  `lavarropas`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
const lavarropas_5: Equipo = new Equipo(
  `Samsung`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
const lavarropas_6: Equipo = new Equipo(
  `LG`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();
const lavarropas_7: Equipo = new Equipo(
  `Hisense`,
  `lavarropas automatico`,
  new Date("2022-02-20"),
  new Date()
);
lavarropas.getAddEquip();

const listLavarropas: Equipo[] = [
  lavarropas,
  lavarropas_2,
  lavarropas_3,
  lavarropas_4,
  lavarropas_5,
  lavarropas_6,
  lavarropas_7,
];

//lavarropas.getReadEquip(`LG`,listLavarropas);
lavarropas.getReadEquip(`LG`, listLavarropas);
console.table(lavarropas.getReadEquip(`LG`, listLavarropas));

console.table(lavarropas.getDeleteEquip(`Samsung`, listLavarropas));

console.table(lavarropas.getEditEquip(`LG`,listLavarropas,`Lg`))
