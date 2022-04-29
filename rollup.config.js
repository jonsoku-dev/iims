import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: ['@babel/preset-env','@babel/preset-react']
            }),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss(),
            terser(),
        ],
        external: Object.keys(packageJson.peerDependencies)
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.(scss|css)$/],
    },
];