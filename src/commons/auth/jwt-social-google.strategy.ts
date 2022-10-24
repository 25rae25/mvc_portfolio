import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import 'dotenv/config';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://togethersports.shop/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(_, __, profile) {
    return {
      email: profile.emails[0].value,
      nickname: profile.displayName,
    };
  }
}
