import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	verbose: true,
	name: "Next Starter App",
	testEnvironment: "jsdom",
	rootDir: ".",
	moduleDirectories: ["node_modules", "src", "pages"],
	clearMocks: true,
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
