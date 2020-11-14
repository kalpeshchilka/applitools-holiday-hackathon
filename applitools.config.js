module.exports = {
  appName: 'AppliFashion',
  batchName: 'Testing Lifecycle',
  browser: [
    { width: 1200, height: 800, name: 'chrome' },
    { width: 1200, height: 800, name: 'firefox' },
    { width: 1200, height: 800, name: 'edgechromium' },
    { width: 1200, height: 800, name: 'safari' },
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
  ],
  concurrency: 10,
};
