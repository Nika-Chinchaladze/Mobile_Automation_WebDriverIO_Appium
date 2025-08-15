import path from 'path';
import { config as sharedConfig } from '../wdio.shared.conf';

export const config = {
    ...sharedConfig,
    runner: 'local',
    port: 4723,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel 3',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/ColorNotepad.apk'),
        "appium:autoGrantPermissions": true,
    }],
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723
            },
            logPath: './'
        }]
    ]
};
