import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const options = { cors: true };
export const app = NestFactory.create(AppModule, options);

async function bootstrap() {
  (await app).listen(3000, () => {
    console.log(`Server running at: http://localhost:${3000}`);
  });
}
bootstrap();
