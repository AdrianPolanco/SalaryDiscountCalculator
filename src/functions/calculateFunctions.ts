//Calculates daily salary according to DGII
export function calculateDailySalary(monthlySalary: number): number {
    return Number((monthlySalary / 23.83).toFixed(2));
}

//Calculates annual salary
export function calculateAnnualSalary(monthlySalary: number): number {
    return Number((monthlySalary * 12).toFixed(2));
}

//Calculates annual taxes of the salaries
export function calculateTaxes(
    grossSalary: number,
    referenceSalary: 416220.01 | 624329.01 | 867123.01,
    taxPercentage: 0 | 0.15 | 0.2 | 0.25,
    base: 0 | 31216 | 79776
): number {
    if (grossSalary < 416220) return 0;
    if (grossSalary < 0)
        throw new Error("Invalid argument: A salary can not be less than 0");

    return base + (grossSalary - referenceSalary) * taxPercentage;
}
