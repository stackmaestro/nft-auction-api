import { Injectable } from '@nestjs/common';
import { USERS } from '../../public/mocks/users';

@Injectable()
export class UserService {

  get() {
    return USERS
  }
}
