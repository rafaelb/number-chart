/**
 * Created by rafae_000 on 15/08/2016.
 */
module.exports = {
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}