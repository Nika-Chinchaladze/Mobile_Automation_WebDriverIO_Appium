// import path from 'path'; >>> local runs
import dotenv from 'dotenv';
dotenv.config();

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    // port: 4723, >>> for local run
    specs: [
        './test/specs/colorNotepadApp/*.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '9.0', // >>> local runs: '11.0',
        'appium:deviceName': 'Google Pixel 3', // >>> local runs: 'Pixel 3',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://3108ae5a6e6b6c5d39129a8f5bd291ae0fff7d7f', // >>> local runs: path.join(process.cwd(), './app/android/ColorNotepad.apk'),
        "appium:autoGrantPermissions": true,
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: [
        ['browserstack', {
            browserstackLocal: true
        }],
        /*
        >>> for local run
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723
            },
            logPath: './'
        }]
        */
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
