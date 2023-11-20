import IExperiences from "./IExperience";

export default interface IExperienceWarehouse {
    getExperienceLevel(years: number): IExperiences;
}
/* Navidad = Sueldo acumulado durante el año/12, Ejemplo: Un trabajador que entro en Octubre, y gana 10000 pesos, tendra
un bono de navidad de 30000/12=2500

Vacaciones = Salario diario * 14 (Si tiene entre 1 y 5 años trabajando en esa empresa)
Vacaciones = Salario diario * 18 (Si tiene más de 5 años trabajando en esa empresa)*/
