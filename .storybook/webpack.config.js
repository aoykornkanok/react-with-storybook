const path = require('path')

module.exports = async ({ config, mode }) => {
    let newConfig = {...config}
    newConfig = {
        ...config, resolve: {
            alias: {
                ...config.resolve.alias,
                testAlias: path.resolve(__dirname, '../src/testAlias')
            }
        }
    }
    return newConfig
}
