import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: 'mongodb://localhost:27017/blog',
}));