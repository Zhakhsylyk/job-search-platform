const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@assets': resolvePath('./src/assets'),
            '@images': resolvePath('./src/assets/images'),
            '@icons': resolvePath('./src/assets/icons'),
            '@services': resolvePath('./src/services'),
            '@pages': resolvePath('./src/components/screens'),
            '@constants': resolvePath('./src/constants'),
        }
    },
}