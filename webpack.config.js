import path from 'path';
import process from 'process';

export default {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'nepali-number-system.min.js',
    path: path.resolve(process.cwd(), './dist/umd'),
    library: {
      name: 'nepaliNumberSystem',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: '$',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
};
