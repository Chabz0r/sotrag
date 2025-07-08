import {SetMetadata} from '@nestjs/common';
import {Role} from "../../utilisateurs/entity/utilisateur.entity";

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
