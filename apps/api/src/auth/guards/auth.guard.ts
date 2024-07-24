import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthJwtGuard extends AuthGuard('jwt') {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {
    super();
  }
  async canActivate(context: ExecutionContext) {
    const canActivate = await super.canActivate(context);
    if (!canActivate) return false;
    const access_token = context
      .switchToHttp()
      .getRequest()
      ['headers']['authorization'].split(' ')[1];
    const { data } = await this.authService.getUserInfo({ access_token });
    if (!access_token) return false;
    try {
      await this.usersService.createUserOrUpdate({
        email: data.email,
        auth0Id: data.sub,
      });
    } catch (error) {
      //TODO: Add logger if get error
      return false;
    }
    return true;
  }
}
