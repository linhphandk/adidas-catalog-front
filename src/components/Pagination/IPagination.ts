export interface IPaginationProps {
    items: Array<any>,
    clickItemHandler: (key:number)=>any,
    clickPrevHandler: ()=>any,
    clickNextHandler: ()=>void,
};
