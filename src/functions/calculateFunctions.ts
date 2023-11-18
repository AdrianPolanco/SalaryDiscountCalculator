
export function calculateNetAnnualSalary(
    grossAnnualSalary: number,
    annualTaxes: number
) {
    return Number((grossAnnualSalary - annualTaxes).toFixed(2));
}

export function calculateMonthlyAmount(annualSalary: number) {
    return Number((annualSalary / 12).toFixed(2));
}
