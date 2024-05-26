import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { SignUpDto } from './dto/signUp-dto';
import { SignInDto } from './dto/signIn-dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('profile', {
      storage: diskStorage({
        destination: 'src/images/users',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @ApiBody({ type: SignUpDto })
  signUp(
    @Body() body: SignUpDto,
    @UploadedFile() profile: Express.Multer.File,
    @Req() req: { log; user },
  ) {
    body.profile = profile ? profile.path : null;
    return this.authService.signUp(req, body);
  }

  @Post('/signIn')
  signIn(@Body() body: SignInDto, @Req() req: { log; user }) {
    return this.authService.signIn(req, body);
  }
}
