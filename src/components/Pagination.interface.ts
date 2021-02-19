export interface IPaginationProps {
    items: Array<number>,
    clickItemHandler: (key:number)=>any,
    clickPrevHandler: ()=>any,
    clickNextHandler: () => void,
    activeValue: number,
    prevAvailable: boolean,
    nextAvailable: boolean
}


