import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import 'dotenv/config';

export class JwtKaKaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: 'https://togethersports.shop/login/kakao',
    });
  }

  validate(_, __, profile) {
    return {
      email: profile._json.kakao_account.email,
      nickname: profile.displayName,
    };
  }
}
