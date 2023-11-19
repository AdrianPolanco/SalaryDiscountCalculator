import IData from "./IData";

type IViewContext = [
    show: IData,
    setShow: React.Dispatch<React.SetStateAction<IData>>
];

export default IViewContext;
