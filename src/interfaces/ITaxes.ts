import ITaxesAmount from "./ITaxesAmount";

export default interface ITaxes {
    taxes: ITaxesAmount[];
    totalAmount: number;
}
