import { Bomba } from "./bomba";
import { KitMangueras } from "./kit-mangueras";
import { MaterialRoscas } from "./kit-mangueras";
import { Equipo } from "./equipo";

const prueba: KitMangueras = new KitMangueras(
    `abc123`,
    3,
    5,
    MaterialRoscas.tergopol
  );
  
  console.log(prueba.getKit());

