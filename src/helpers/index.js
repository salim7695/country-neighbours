const getKeyFromPair = (pair, delimeter=':') => {
  if (pair[0].localeCompare(pair[1]) < 0) [pair[0], pair[1]] = [pair[1], pair[0]];

  return pair.join(delimeter);
};

const getPairFromKey = (pairKey, delimeter=':') => {
  return pairKey.split(delimeter);
};

const findMutualNeighbor = (countriesWithNeighbor) => {
  const neighborPairKeySet = new Set();
  const mutualNeighbors = [];

  countriesWithNeighbor.forEach((country) => {
    country.neighbors.forEach((neighbour) => {
      const pairKey = getKeyFromPair([ country.name, neighbour ]);

      if (neighborPairKeySet.has(pairKey)) {
        mutualNeighbors.push(getPairFromKey(pairKey));
      } else {
        neighborPairKeySet.add(pairKey);
      }
    });
  });

  return mutualNeighbors;
}

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

export {
  findMutualNeighbor,
  shuffleArray
}
