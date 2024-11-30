import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CandidatsModule } from './candidats/candidats.module';

import { AppService } from './app.service';

@Module({
  imports: [CandidatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
