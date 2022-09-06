import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import 'dotenv/config';

export class JwtKaKaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: 'https://shaki-server.shop/login/kakao',
    });
  }

  validate(_, __, profile) {
    return {
      email: profile._json.kakao_account.email,
      name: profile.displayName,
    };
  }
}
