import { OO7Cul } from '../../assets/oo7-react-bts.v0.1.1';

export const clearString = OO7Cul.clearString;

export const peopleResultFind = ( props, target ) => {
    if( props && target ){
        return props.filter( (item)=>{
            return item.name.includes(target);
        } );
    }
    return [];
};