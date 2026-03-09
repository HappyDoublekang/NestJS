import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
// eslint-disable-next-line prettier/prettier
export class ExceptionFilterFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    return response.status(exception.getStatus()).json({
      timeStamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: exception.message,
      code: exception.getStatus(),
      success: false,
    });
  }
}
