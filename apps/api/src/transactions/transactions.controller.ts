import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getTransactions(
    @Request() req: any,
    @Query('skip') skip = 0,
    @Query('take') take = 10,
  ) {
    return this.transactionsService.getTransactions(
      req.user.id,
      parseInt(skip),
      parseInt(take),
    );
  }
}
