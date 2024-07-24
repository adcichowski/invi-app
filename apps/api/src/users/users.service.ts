import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserByAuth0Id({ auth0Id }: { auth0Id: string }) {
    return this.prisma.users.findUnique({
      where: {
        auth0Id,
      },
    });
  }

  async createUserOrUpdate(data: { email: string; auth0Id: string }) {
    return this.prisma.users.upsert({
      create: data,
      update: { active_at: new Date() },
      where: { auth0Id: data.auth0Id },
    });
  }
}
