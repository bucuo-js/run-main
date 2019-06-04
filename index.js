/**
 * @param {function(...[string]): (void | Promise<void>)} main
 * @param [options]
 * @param {function(error)} [options.logError=console.error]
 * @param {boolean} [options.forceExit=false]
 */
async function runMain(main, options = {}) {
  const { logError = console.error.bind(console), forceExit = false } = options;
  try {
    await main(...process.argv.slice(2));
    if (forceExit) {
      process.exit(0);
    }
  } catch (error) {
    logError(error);
    process.exit(1);
  }
}

module.exports = runMain;
