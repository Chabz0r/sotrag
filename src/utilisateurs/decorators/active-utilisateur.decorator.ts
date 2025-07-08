import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {ActiveUtilisateurData} from '../interfaces/active-utilisateur-data.interface';

export const REQUEST_USER_KEY = 'user';

export const ActiveUtilisateur = createParamDecorator(
  (field: keyof ActiveUtilisateurData | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: ActiveUtilisateurData | undefined = request[REQUEST_USER_KEY];
    return field ? user?.[field] : user;
  },
);
