import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorekeeperModule } from './storekeeper/storekeeper.module';
import { TechnicianModule } from './technician/technician.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
     envFilePath:'.env',
     isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    StorekeeperModule, TechnicianModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
