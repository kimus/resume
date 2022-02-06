module.exports = (config) => {
  config.addNunjucksFilter("log", (o) => console.log(o));

  return {
    dir: {
      pathPrefix: process.env.SITE_PATH,

      input: 'pages',
      output: 'dist',
      
      // These values are both relative to your input directory
      includes: '../templates/includes',
      layouts: '../templates/layouts',
      data: '../data'
    }
  };
};