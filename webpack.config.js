module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.(png|jpe?g|gif|woff|ttf|svg|eot)$/i,
                use: {
                    loader: 'file-loader',
                },
            },
        ]
    },
    output: {
      filename: "[name].js",
      sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
};