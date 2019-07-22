window.dataPokemon = {
//para filtrar
  filterData: (data, condition) => {
    for (let i = 0; i < data.length; i++){
      //filtrar por tipo
      if((data[i].type).includes(condition)){
        return data.filter(element => element.type[0] === condition || element.type[1] === condition);
      //filtrar por debilidad
      } else if ((data[i].weaknesses).includes(condition)){
        return data.filter(element => element.weaknesses[0] === condition || element.weaknesses[1] === condition || element.weaknesses[2] === condition || element.weaknesses[3] === condition);  
      }
    }
  },
  sortData: (data, sortBy, sortOrder) => {
    let sorted = [];
    if (sortBy == "name"){
      if(sortOrder == "ascendente"){
        sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder == "descendente"){
        sorted = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      } 
      return sorted;
    }
    if (sortBy == "number"){
      if(sortOrder == "ascendente"){
        sorted = data.sort((a, b) => a.num.localeCompare(b.num));
      } else if (sortOrder == "descendente"){
        sorted = data.sort((a, b) => a.num.localeCompare(b.num)).reverse();
      } 
      return sorted;
    }
  },
  computeStats: (data, condition) => {
    for (let i = 0; i < data.length; i++){
    let result = data.filter(element => element.type[0] === condition || element.type[1] === condition);
    return "Los Pokemones deste tipo representan " + Math.round((result.length*100) / data.length)+"% de todos los de la Generación Kanto";
  }
  }
};


//   sortData: (data, sortBy, sortedOrder) => {
//     let result = data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
//     if (sortedOrder){
//       return result;
//       } else {
//     return result.reverse();
//       }
//  } 
// sortData: (data, condition) => {
// let sorted = [];
// // logica para ordenar por nombre
// function sortByName(a, b) {
//   if (a.name > b.name)
//     return 1;
//   if (a.name < b.name)
//     return -1; 
// }
// // logica para ordenar por Id
// function sortByNumber(a, b) {
//   if (a.id > b.id)
//     return 1;
//   if (a.id < b.id)
//     return -1;
// }
//   if (condition === 'A-Z') {
//     sorted = data.sort(sortByName);
//   }
//   if (condition === 'Z-A') {
//     sorted = data.sort(sortByName).reverse();
//   }
//   if (condition === '1-151') {
//     sorted = data.sort(sortByNumber);
//   }
//   if (condition === '151-1') {
//     sorted = data.sort(sortByNumber).reverse();
//   }
//   return sorted;
// }