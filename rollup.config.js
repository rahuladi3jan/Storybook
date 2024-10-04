import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';
import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
// import svgr from "@svgr/rollup";

const pkg = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
      resolve(),
      peerDepsExternal(),
      terser(),
      commonjs(),
      json(),
      babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
      // svgr({ exportType: "named", namedExport: "ReactComponent", svgo: false }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      postcss({
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'styles.css',
      }),
      copy({
        targets: [
          { src: 'src/styles/fonts/*', dest: 'dist/fonts' }, // Update with your font file paths
        ],
      }),
    ],
    external: ["react", "react-dom"],
  },
];
