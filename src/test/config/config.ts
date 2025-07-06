import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    appUrl: process.env.APP_URL || 'https://shop.polymer-project.org/',
    headlessMode: process.env.HEADLESS_MODE === 'true', // Converts string to boolean
};