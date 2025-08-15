export const config: WebdriverIO.Config = {
    tsConfigPath: '.././tsconfig.json',
    exclude: [],
    specs: [
        '.././test/specs/colorNotepadApp/*.ts'
    ],
    maxInstances: 1,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    capabilities: [],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
