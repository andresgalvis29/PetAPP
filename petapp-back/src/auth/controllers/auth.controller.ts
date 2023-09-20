import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { GoogleCredentialClient } from '../models/google-credential.model';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: GoogleCredentialClient) {
    return this.authService.validateUser(payload);
  }
}
