import type { Config } from "jest";

function makeModuleNameMapper(srcPath: string, tsconfigPath: string) {
    // Get paths from tsconfig
    const { paths } = require(tsconfigPath).compilerOptions;

    const aliases: { [key: string]: string } = {};

    // Iterate over paths and convert them into moduleNameMapper format
    Object.keys(paths).forEach((item) => {
        const key = item.replace("/*", "/(.*)");
        const path = paths[item][0].replace("/*", "/$1");
        aliases[key] = srcPath + "/" + path;
    });
    return aliases;
}

const TS_CONFIG_PATH = "./tsconfig.json";
const SRC_PATH = "<rootDir>";

export default async (): Promise<Config> => {
    return {
        preset: "ts-jest",
        testEnvironment: "node",
        testPathIgnorePatterns: ["dist"],
        moduleDirectories: ["node_modules", "src", "<rootDir>"],
        transform: {
            "^.+\\.(ts|tsx)?$": "ts-jest",
            "^.+\\.(js|jsx)$": "babel-jest",
        },
        moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
        verbose: true,
        testTimeout: 50000,
        detectOpenHandles: true,
        setupFiles: ["dotenv/config"],
        testRegex: `tests/.*\\.test\\.ts$`,
    };
};
