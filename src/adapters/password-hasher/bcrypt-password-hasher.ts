import { PasswordHasher } from './password-hasher.interface';
import * as bcrypt from 'bcrypt';

export class BcryptPasswordHasher implements PasswordHasher {
  private _saltRounds = 10;

  get saltRounds(): number {
    return this._saltRounds;
  }

  set saltRounds(value: number) {
    if (value < 1) {
      throw new Error('El número de rondas de salt debe ser al menos 1');
    }
    this._saltRounds = value;
  }

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this._saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
