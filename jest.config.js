module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },

    testMatch: ['**/*.test.ts', '**/*.spec.js', '**/*.spec.jsx', '**/*.test.tsx'],
    testPathIgnorePatterns: ['/node_modules/'],

    preset: 'ts-jest/presets/js-with-ts',

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
