import { SetStateAction } from "react";

export type IView = [
    state: boolean,
    dispatch: React.Dispatch<SetStateAction<boolean>>
];
