try {
  const unparsedEntrypointArgument = process.argv[2];
  const parsedEntrypointArguments = unparsedEntrypointArgument
    ? JSON.parse(unparsedEntrypointArgument)
    : {};
  const { args: additionalLaunchArgs = [], ...launchOptions } =
    parsedEntrypointArguments;
  console.log(
    "Executing puppeteer.launch with following arguments and options",
    additionalLaunchArgs,
    launchOptions
  );
  require("puppeteer")
    .launch({
      args: [
        "--no-sandbox",
        "--remote-debugging-address=0.0.0.0",
        `--remote-debugging-port=${process.env.PORT}`,
        ...additionalLaunchArgs,
      ],
      ...launchOptions,
    })
    .then((browser) => {
      console.log(browser.wsEndpoint());
    })
    .catch((err) => {
      throw err;
    });
} catch (err) {
  console.error(err);
  process.exit(1);
}
