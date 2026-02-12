import { defineConfig } from '@prisma/config';
import dotenv from 'dotenv'; // Load env vars

dotenv.config();

export default defineConfig({
    datasource: {
        url: process.env.DATABASE_URL,
    },
});
