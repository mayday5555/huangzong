let [width, height] = [];
if (process.env.TERMINAL === 'PC') {
  width = 1920;
  height = 1080;
} else if (process.env.TERMINAL === 'mobile') {
  width = 390;
  height = 844;
}
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: width,
      viewportHeight: height,
      propList: ['*', '!line-height'],
    },
  },
};
