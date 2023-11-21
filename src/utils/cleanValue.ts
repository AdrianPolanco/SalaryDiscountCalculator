//Creating function to remove every commas in the value
export default function cleanValue(value: string): string {
    return value.replace(/,/g, "");
}
