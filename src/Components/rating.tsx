import type { JSX } from "react";
import { FaStar } from "react-icons/fa";

type Trate = {
    className? : string,
    rate : number,
    label? : boolean
}

const Rating : React.FC<Trate> = ({rate, className="", label=false}) => {
    const roundRate = Math.round(rate);
    const arr : JSX.Element[] = [];
    for(let i=0;i<roundRate;i++){
        arr.push(<FaStar color="gold"/>);
    }
    return (
        <div className={`inline-flex ${className}`}>
            {label ? <p className="font-opensans pr-2">Rating:</p> : null}
            <span className="flex space-x-0.5 pt-1">{arr}</span>  
        </div>      
    )
}

export {Rating}