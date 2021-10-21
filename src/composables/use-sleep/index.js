/**
 * Sleep function for async methods
 *
 * @param  {number} 1000 - delay to sleep in miliseconds
 * @return promise - that resolves after the delay
 */
export default (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay))
