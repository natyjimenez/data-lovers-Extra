global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon');
require('../src/data')
require('./data.spec.js');

const sample = [{"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}, {"id": 150, "num": "150", "name": "Mewtwo","type": ["Psychic"],"weaknesses": ["Bug","Ghost","Dark"]}];

describe('dataPokemon', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof window.dataPokemon, 'object');
  });
});

describe('filterData', () => {
  
  it('debería ser una function', () => {
    assert.equal(typeof window.dataPokemon.filterData, 'function');
  });
  it('debería retornar el objeto Bulbasaur al filtrar por el tipo Grass', () => {
    assert.deepEqual(window.dataPokemon.filterData(sample, "Grass"), [{"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}]);
  });
  it('debería retornar el objeto Bulbasaur al filtrar por la debilidad Fire', () => {
    assert.deepEqual(window.dataPokemon.filterData(sample, "Fire"), [{"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}]);
  });
}); 

describe('sortData', () => {
  it('debería ser una function', () => {
    assert.equal(typeof window.dataPokemon.sortData, 'function');
  });
  it('deberia retornar objetos Bulbasaur y Mewtwo al ordenar de la A a la Z', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "name", "ascendente"), [{"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}, {"id": 150, "num": "150", "name": "Mewtwo","type": ["Psychic"],"weaknesses": ["Bug","Ghost","Dark"]}]);
  });
  it('deberia retornar objetos Mewtwo y Bulbasaur al ordenar de la Z a la A', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "name", "descendente"), [{"id": 150, "num": "150", "name": "Mewtwo","type": ["Psychic"],"weaknesses": ["Bug","Ghost","Dark"]}, {"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}]);
  });
  it('deberia retornar objetos Bulbasaur y Mewtwo al ordenar de la 1 a 151', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "number", "ascendente"), [{"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}, {"id": 150, "num": "150", "name": "Mewtwo","type": ["Psychic"],"weaknesses": ["Bug","Ghost","Dark"]}]);
  });
  it('deberia retornar objetos Bulbasaur y Mewtwo al ordenar de la 151 a 1', () => {
    assert.deepEqual(window.dataPokemon.sortData(sample, "number", "descendente"), [{"id": 150, "num": "150", "name": "Mewtwo","type": ["Psychic"],"weaknesses": ["Bug","Ghost","Dark"]}, {"id": 1, "num": "001", "name": "Bulbasaur","type": ["Grass"],"weaknesses": ["Fire"]}]);
  });
}); 

describe('computeStats', () => {
  it('debería ser una function', () => {
    assert.equal(typeof window.dataPokemon.computeStats, 'function');
  });
  it('debería retornar Los Pokemones deste tipo representan 50% de todos los de la Generación Kanto', () => {
    assert.deepEqual( window.dataPokemon.computeStats(sample, "Grass"),"Los Pokemones deste tipo representan 50% de todos los de la Generación Kanto");
  });
  it('debería retornar Los Pokemones deste tipo representan 50% de todos los de la Generación Kanto', () => {
    assert.deepEqual( window.dataPokemon.computeStats(sample, "Psychic"),"Los Pokemones deste tipo representan 50% de todos los de la Generación Kanto");
  });
});