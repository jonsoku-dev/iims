import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import * as path from 'path';

const packageJson = require("./package.json");
const moduleName = packageJson.name.replace(/^@.*\//, '');
const inputFileName = 'src/index.ts';

const banner = `
  /**
   * @license
   * ${moduleName}.js v${packageJson.version}
   * Released under the ${packageJson.license} License.
   */
`;

export default [
    {
        input: inputFileName,
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                banner
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                banner
            },
        ],
        plugins: [
            peerDepsExternal(),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                configFile: path.resolve(__dirname, 'babel.config.js'),
            }),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss(),
            terser(),
        ],
        external: [
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.devDependencies || {}),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.(scss|css)$/],
    },
];