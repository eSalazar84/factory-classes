import  fs from "fs";
import { Bomba } from "./bomba";
import { Equipo } from "./equipo";

const bomba_1:Bomba=new Bomba(`1HP750W`,25,33,`Nero`);
const bomba_2:Bomba=new Bomba(`0.5HP750W`,21,27,`Gamma`);
const bomba_3:Bomba=new Bomba(`0.4HP500W`,28,30,`Pluvius`);
const bomba_4:Bomba=new Bomba(`1.5HP650W`,29,34,`Gamma`);
const bomba_5:Bomba=new Bomba(`1.2HP700W`,26,29,`HP`);
const bomba_6:Bomba=new Bomba(`0.4HP400W`,18,28,`Mega`);
const bomba_7:Bomba=new Bomba(`1.3HP850W`,20,25,`Turbo`);
const bomba_8:Bomba=new Bomba(`1.8HP900W`,24,32,`Nero`);

const listBombas=[bomba_1,bomba_2,bomba_3,bomba_4,bomba_5,bomba_6,bomba_7,bomba_8];

const bombaToJson=JSON.stringify(listBombas);
fs.writeFileSync(`./base-datos/listado-bombas.json`,bombaToJson,`utf8`);

//---------------------------------------------------------------------------------

const lavarropas: Equipo = new Equipo(`Drean`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_1);
const lavarropas_2: Equipo = new Equipo(`Drean`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_2);
const lavarropas_3: Equipo = new Equipo(`Longvie`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_4);
const lavarropas_4: Equipo = new Equipo(`LG`,`lavarropas`,new Date("2022-02-20"),new Date(),bomba_7);
const lavarropas_5: Equipo = new Equipo(`Samsung`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_5);
const lavarropas_6: Equipo = new Equipo(`LG`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_7);
const lavarropas_7: Equipo = new Equipo(`Hisense`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_8);

const listLavarropas: Equipo[] = [lavarropas,lavarropas_2,lavarropas_3,lavarropas_4,lavarropas_5,lavarropas_6,lavarropas_7,];

const equipoToJson=JSON.stringify(listLavarropas);
fs.writeFileSync(`./base-datos/listado-equipos.json`,equipoToJson,`utf8`);

console.table(lavarropas_2.getEquip());