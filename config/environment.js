const development = {
    name: 'development',
    asset_path: './assets',
    port: 8000
};

const production = {
    name: 'production',
    asset_path: process.env.PF_ASSET_PATH,
    port: process.env.PORT
};

module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.NODE_ENV);