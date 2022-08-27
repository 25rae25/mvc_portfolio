import { UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

export interface IContext {
  req: Request;
  res: Response;
}
