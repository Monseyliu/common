const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: '',
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        before: app => {}
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
            .set('coomponents', resolve('src/components'))
            .set('common', resolve('src/components/common'))
            .set('views', resolve('src/views'))
            .set('utils', resolve('src/utils'))
    }
}