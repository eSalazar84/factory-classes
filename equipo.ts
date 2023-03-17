import { Bomba } from "./bomba";
import { KitMangueras } from "./kit-mangueras";
import { Motor } from "./motor";
import { MotorCombustion } from "./motorCombustible";
import { MotorElectrico } from "./motorElectrico";

export class Equipo {
  private id: string;
  private description: string;
  private manufactureDate: Date;
  private installationDate: Date;
  private bomba: Bomba;
  private kitMangueras: KitMangueras;
  private motor:MotorElectrico | MotorCombustion;
  constructor(
    id: string,
    description: string,
    manufacture: Date,
    installationDate: Date,
    bomba: Bomba,
    kitMangueras: KitMangueras,
    motor: MotorElectrico | MotorCombustion
  ) {
    this.id = id;
    this.description = description;
    this.manufactureDate = manufacture;
    this.installationDate = installationDate;
    this.bomba = bomba;
    this.kitMangueras = kitMangueras;
    this.motor=motor
  }
  getEquip(): string {
    return `
        Se agrego el equipo ${this.id} con los siguientes datos:
        Equipo = ${this.id}
        Descripción = ${this.description}
        Fecha de Fabricacion = ${this.manufactureDate}
        Fecha de Instalacion = ${this.installationDate}
        Bomba = ${this.bomba}
        Kit de Mangueras = ${this.kitMangueras}
        Motor = ${this.motor}
        `;
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
  getEditEquip(dataSearch: string, array: Equipo[], datoAcambiar: string) {
    const modificarDato: Equipo = this.getReadEquip(dataSearch, array);
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
