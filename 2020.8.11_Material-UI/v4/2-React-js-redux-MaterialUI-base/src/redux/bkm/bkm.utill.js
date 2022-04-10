export const bkmSimpleData_utill = (props) => {
    const { results } = props;
    return results.map((item,index) => {
        return {
            id: index+1,
            title: item.name,
            url: item.url,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });
};

export const bkmItemSimpleData_utill = ( props ) => {
    const { id, name, height, weight } = props;
    return {
        id,
        name,
        height,
        weight,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(id)}.png`
    };
};

export const bkmFilterData_utill = ( target, dataArray ) => {
    let result = [];
    
    // 无搜索内容时
    if( !target ){
        return dataArray;
    }
    // 有搜索内容时
    else if( target && dataArray instanceof Array ){
        result = dataArray.filter( item => (item.title).includes( target ) );   
    }

    return result;
};