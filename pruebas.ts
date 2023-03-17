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

  const bomba_4:Bomba=new Bomba(`1.5HP650W`,29,34,`Gamma`);
  const lavarropas_5: Equipo = new Equipo(`Samsung`,`lavarropas automatico`,new Date("2022-02-20"),new Date(),bomba_4,prueba);

  console.log(lavarropas_5);
  