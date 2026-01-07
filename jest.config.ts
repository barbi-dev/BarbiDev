import type { Config } from 'jest'
const config: Config = { testEnvironment: 'jest-environment-jsdom', moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' }, setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'] }
export default config