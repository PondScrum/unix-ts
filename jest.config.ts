import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules', 'src']
};

export default config;