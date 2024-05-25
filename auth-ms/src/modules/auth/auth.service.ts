import {
  BadRequestException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { RESPONSE } from 'src/utils/constants';
import { IPayload } from 'src/utils/interfaces/payload.interface';
import { ResponseFormatter } from 'src/utils/response.formatter';
import * as bcrypt from 'bcrypt';
import {
  UserAccount,
  UserAccountDocument,
} from '../user/schema/user-account-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserAccount.name)
    private readonly userAccountModel: Model<UserAccount>,
    private jwtService: JwtService,
  ) {}

  async signUp(payload: IPayload): Promise<ResponseFormatter> {
    try {
      const { data } = payload;

      const isEmailExits = await this.userAccountModel.findOne({
        email: data.email,
      });
      if (isEmailExits) {
        throw new BadRequestException(RESPONSE.MESSAGE.AUTH.EMAIL_EXITS);
      }
      const user = new UserAccount();
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.email = data.email;
      user.password = await this.hashPassword(data.password);
      user.profile = data.profile;
      await this.userAccountModel.create(user);

      return new ResponseFormatter(
        HttpStatus.CREATED,
        RESPONSE.MESSAGE.AUTH.SIGN_UP,
        null,
      );
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async signIn(payload: IPayload): Promise<ResponseFormatter> {
    try {
      const { data } = payload;
      const user = await this.userAccountModel
        .findOne({ email: data.email })
        .exec();
      if (!user) {
        throw new BadRequestException(RESPONSE.MESSAGE.AUTH.INVALID_LOGIN_CRED);
      }
      const isPassword = await bcrypt.compare(data.password, user.password);
      if (!isPassword) {
        throw new BadRequestException(RESPONSE.MESSAGE.AUTH.INVALID_LOGIN_CRED);
      }
      const accessToken = await this.jwtService.sign(
        { id: user.id, email: user.email },
        { secret: process.env.JWT_SECRET },
      );
      return new ResponseFormatter(
        HttpStatus.ACCEPTED,
        RESPONSE.MESSAGE.AUTH.SIGN_IN,
        null,
        accessToken,
      );
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
