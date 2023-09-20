import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { PayloadToken } from '../models/token.model';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { Rol } from '../models/roles.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Rol[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return true;
    }
    // ['admin', 'customer'];
    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;
    // { role: 'admin', sub: 1212 }
    const isAuth = roles.some((rol) => rol === user.rol);
    if (!isAuth) {
      throw new UnauthorizedException('your role is wrong');
    }
    return isAuth;
  }
}
