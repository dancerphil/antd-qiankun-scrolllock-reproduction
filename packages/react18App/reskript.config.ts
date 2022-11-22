import {configure} from '@reskript/settings';
const {name: packageName} = require('./package.json');

export default configure(
    'webpack',
    {
        build: {
            appTitle: '未知应用', // TODO: 修改系统名称
            finalize(webpackConfig) {
                webpackConfig.output = {
                    ...webpackConfig.output,
                    library: `${packageName}-[name]`,
                    libraryTarget: 'umd',
                };
                return webpackConfig;
            },
        },
        devServer: {
            port: 8200,
            apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
            defaultProxyDomain: 'unknown-test.baidu-int.com', // TODO: 设置后端测试环境域名
        },
    }
);
