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