module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

};
