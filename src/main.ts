import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger/logger';
import { applicationConfig } from './config/config.module';

async function bootstrap() {
    const appOptions = {
        cors: true,
        logger
    };

    const app = await NestFactory.create(AppModule, appOptions);
    app.setGlobalPrefix('api');

    await app.listen(applicationConfig.port);
}

bootstrap().catch((err) => {
    logger.error(err);
    process.exit(1);
});
