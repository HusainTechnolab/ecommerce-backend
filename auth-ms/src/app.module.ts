import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:`${process.cwd()}/config/env/${process.env.NODE_ENV}.env`
    }),
    AuthModule
  ],
})
export class AppModule { }
