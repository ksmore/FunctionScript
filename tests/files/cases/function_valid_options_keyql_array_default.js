/**
* Invalid Options Array
* @param {array} query
* @ {object.keyql.query} keyqlquery {?} ["name", "age"]
* @returns {boolean}
*/
module.exports = async (query = [{"name__is": "john"}]) => {
  return true;
};
