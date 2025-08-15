import dotenv from 'dotenv';
dotenv.config();
import { config as sharedConfig } from '../wdio.shared.conf';

export const config = {
    ...sharedConfig,
    capabilities: [{
    platformName: 'Android',
    'appium:platformVersion': '9.0',
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://3108ae5a6e6b6c5d39129a8f5bd291ae0fff7d7f',
    "appium:autoGrantPermissions": true,
    }],
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: [
        ['browserstack', {
            browserstackLocal: true
        }],
    ]
};
