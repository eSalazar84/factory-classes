import  fs from "fs";
import { Bomba } from "./bomba";
import { KitMangueras, MaterialRoscas } from "./kit-mangueras";
import { Eficiencia, Motor } from "./motor";
import { CombustibleType, MotorCombustion } from "./motorCombustible";
import { MotorElectrico } from "./motorElectrico";
import { Equipo } from "./equipo";

//CLASE BOMBA

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

//CLASE KIT MANGUERAS

const kit_1:KitMangueras=new KitMangueras(`manguerin`,4,3,MaterialRoscas.PVC);
const kit_2:KitMangueras=new KitMangueras(`mangueron`,2,2,MaterialRoscas.acero);
const kit_3:KitMangueras=new KitMangueras(`manguerita`,1,1.5,MaterialRoscas.goma);
const kit_4:KitMangueras=new KitMangueras(`manguer`,3,0.5,MaterialRoscas.plastico);
const kit_5:KitMangueras=new KitMangueras(`manguero`,6,1.9,MaterialRoscas.acero);

const listKit=[kit_1,kit_2,kit_3,kit_4,kit_5];

const kitToJson=JSON.stringify(listKit);
fs.writeFileSync(`./base-datos/listado-kitMangueras.json`,kitToJson,`utf8`);

//---------------------------------------------------------------------------------

//CLASE MOTOR Electrico

const motorElect_1:MotorElectrico=new MotorElectrico(`Tesla Automate`,2000,Eficiencia.A,`Tesla Motors`,700, 8000,true);
const motorElect_2:MotorElectrico=new MotorElectrico(`Robotito`,1500,Eficiencia.C,`Chinwain`,157,3000,false);

const listElectric=[motorElect_1,motorElect_2]

const electricToJson=JSON.stringify(listElectric);
fs.writeFileSync(`./base-datos/listado-motorElectrico.json`,electricToJson,`utf8`);



//---------------------------------------------------------------------------------

//CLASE MOTOR Combustion

const motorComb_1:MotorCombustion=new MotorCombustion(`Ford F-100`, 4500, Eficiencia.E,`Ford Motors`,8,CombustibleType.gas_oil);
const motorComb_2:MotorCombustion=new MotorCombustion(`Volvo`,6000,Eficiencia.B,`Volvo Europe`,16,CombustibleType.nafta)

const listCombustion =[motorComb_1,motorComb_2]

const combustionToJson=JSON.stringify(listCombustion);
fs.writeFileSync(`./base-datos/listado-motorCombustion.json`,combustionToJson,`utf8`);

//---------------------------------------------------------------------------------

//CLASE GENERAL EQUIPO

const equipo_1:Equipo=new Equipo(`Drean`,`Lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_1,kit_2,motorElect_1);
const equipo_2:Equipo=new Equipo(`Whirpool`,`Lava-secarropas automatico`,new Date("2000-06-30"),new Date("2005-05-06"),bomba_4,kit_5,motorComb_2);

const listLavarropas: Equipo[] = [equipo_1,equipo_2];

const equipoToJson=JSON.stringify(listLavarropas);
fs.writeFileSync(`./base-datos/listado-equipos.json`,equipoToJson,`utf8`);