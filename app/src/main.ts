import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { ExceptionFilterFilter } from './exception-filter/exception-filter.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new InterceptorInterceptor());
  app.useGlobalFilters(new ExceptionFilterFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
