class Lodash {
  compact(arr) {
    return arr.filter((val) => !!val);
  }
  groupBy(arr, prop) {
    return arr.reduce((acc, curr) => {
      const key = typeof prop === 'function' ? prop(curr) : curr[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  }
}

module.exports = Lodash;
