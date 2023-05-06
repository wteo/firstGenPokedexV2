export const fetchData = async(setState, link) => {
    const response = await fetch(link);
    const data = await response.json();

    setState({
        id: data.id,
        image: data.sprites.front_default,
        species: data.species.name,
        type1: data.types[0].type.name,
        type2: data.types[1]?.type.name,
        height: data.height,
        weight: data.weight
    });
};