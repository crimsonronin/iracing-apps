module.exports = {
    plugins: ['@babel/proposal-decorators', ['@babel/plugin-proposal-class-properties', { loose: true }]],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-flow',
        '@babel/preset-react',
        '@babel/preset-stage-2',
    ],
    ignore: ['node_modules', 'build'],
};
