module.exports = {
    parallel: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
};
