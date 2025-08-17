export interface PasswordHasher {
  hash(password: string): string | Promise<string>;
  compare(password: string, hash: string): boolean | Promise<boolean>;
}
