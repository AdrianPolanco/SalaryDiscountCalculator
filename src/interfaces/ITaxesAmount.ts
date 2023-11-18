export default interface ITaxesAmount {
    taxPercentage: "0%" | "15%" | "20%" | "25%";
    baseAmount: number;
    taxAmount: number;
}
