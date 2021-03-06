let AutomaticComponent = require('./AutomaticComponent');

class Css extends AutomaticComponent {
    webpackRules() {
        return [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },

            {
                test: /\.s[ac]ss$/,
                exclude: this.excludePathsFor('sass'),
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.less$/,
                exclude: this.excludePathsFor('less'),
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }
        ];
    }

    excludePathsFor(preprocessor) {
        let exclusions = Mix.components.get(preprocessor);

        return exclusions
            ? exclusions.details.map(preprocessor => preprocessor.src.path())
            : [];
    }
}

module.exports = Css;
