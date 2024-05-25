import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { IPayload } from 'src/utils/interfaces/payload.interface';
import { MICRO_SERVICE } from 'src/utils/constants';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: MICRO_SERVICE.AUTH_MS.EVENT.SIGN_UP })
  signUp(@Payload() payload: IPayload) {
    return this.authService.signUp(payload);
  }

  @MessagePattern({ cmd: MICRO_SERVICE.AUTH_MS.EVENT.SIGN_IN })
  signIn(@Payload() payload: IPayload) {
    return this.authService.signIn(payload);
  }
}
