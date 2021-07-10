const withImages = require("next-images");
module.exports = withImages();

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
})

module.exports = {
    target: "serverless"
}

module.exports = {
    webpack5: true,
}
module.exports = {
    target: "serverless"
}

module.exports = {
    env: {
        MONGODB_DB_HORECASTAFF: 'horecastaffDb',
        MONGODB_URI_HORECASTAFF:'mongodb+srv://Joris:29911Linleoni4@cluster0.v9lde.mongodb.net/horecastaffDb?retryWrites=true&w=majority'
    },
}