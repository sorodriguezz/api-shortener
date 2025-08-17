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

  hash(password: string): string {
    return bcrypt.hashSync(password, this._saltRounds);
  }

  compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
