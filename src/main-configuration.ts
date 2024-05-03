import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from 'src/app.module';

export async function MainConfiguration() {
    const app = await NestFactory.create(AppModule);
    const config = new ConfigService();

    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true })
    )
    app.enableCors({
        methods: 'GET,POST,PATCH,DELETE',
        origin: '*'
    })

    return { app, config }
}