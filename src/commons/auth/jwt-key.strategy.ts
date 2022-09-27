import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtKeyStrategy extends PassportStrategy(Strategy, 'key') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookies = req.headers.cookies;
        if (cookies) return cookies.replace('Token=', '');
      },
      secretOrKey: 'key',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.nickname,
    };
  }
}
