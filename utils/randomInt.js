/**
 * Returning random int from min to max number as its parameters
 * @author ReachYourDream
 * @param  {Integer} minInt -  the minimum number
 * @param  {Integer} maxInt -  the maximum number
 * @returns {number} randomNumber - the random Integer between 0 and max
 */
module.exports = (minInt, maxInt) => {
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}
