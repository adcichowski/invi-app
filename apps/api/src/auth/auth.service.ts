import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

  async getUserInfo({ access_token }: { access_token: string }) {
    return await firstValueFrom(
      this.httpService.get<{ email: string; sub: string }>(`/userinfo`, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
    );
  }
}
