module.exports = {
    publicPath: '/diceish/',
    outputDir: "docs",
  "transpileDependencies": [
    "vuetify"
  ],
    pwa: {
        name: 'Dice-Ish',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        },
        //ToDo: Need to finish changing out the icons to the correct version/format
    }
};
