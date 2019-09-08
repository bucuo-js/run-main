/**
 * @param {function(...[string]): (void | Promise<void>)} main
 * @param [options]
 * @param {function(error)} [options.logError=console.error]
 * @param {boolean} [options.forceExit=false]
 */
function runMain(main, options = {}) {
  const { logError = console.error.bind(console), forceExit = false } = options;
  Promise.resolve(process.argv.slice(2))
    .then(args => main(...args))
    .then(() => forceExit && process.exit(0))
    .catch(err => {
      logError(err);
      process.exit(1);
    });
}

module.exports = runMain;
