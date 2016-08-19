function nestedFlatten(list) {
  return list.reduce(function innerFlatten(a, b) {
    return a.concat( Array.isArray(b) ? nestedFlatten(b) : b );
  }, []);
}

module.exports = nestedFlatten;