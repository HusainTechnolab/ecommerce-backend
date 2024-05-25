import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';
import { SignUpDto } from './dto/signUp-dto';
import { SignInDto } from './dto/signIn-dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MICRO_SERVICE.AUTH.NAME)
    private readonly authServiceClient: ClientProxy,
  ) {}

  async signUp(req: { log: object; user: any }, data: SignUpDto) {
    return firstValueFrom(
      this.authServiceClient.send(
        { cmd: MICRO_SERVICE.AUTH.EVENT.SIGN_UP },
        { log: req.log, data },
      ),
    ).catch((error) => {
      throw new HttpException(error.message, error.status);
    });
  }

  async signIn(req: { log: object; user: any }, data: SignInDto) {
    return firstValueFrom(
      this.authServiceClient.send(
        { cmd: MICRO_SERVICE.AUTH.EVENT.SIGN_IN },
        { log: req.log, data },
      ),
    ).catch((error) => {
      throw new HttpException(error.message, error.status);
    });
  }
}
