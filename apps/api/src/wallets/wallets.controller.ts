import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getWallet(@Request() req: any) {
    return this.walletsService.getWallet(req.user.id);
  }
}
