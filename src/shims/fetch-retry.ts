const fetchRetry = (url, options = {}) => {
  return globalThis.fetch(url, options);
};
export default fetchRetry;
