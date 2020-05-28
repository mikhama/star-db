const compose = (...funcs) => (comp) => funcs
  .reduceRight((prevResult, fn) => fn(prevResult), comp);

export default compose;
