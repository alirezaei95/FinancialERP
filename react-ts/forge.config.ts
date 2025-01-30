module.exports = {
    packagerConfig: {
      icon: './assets/app-icon', // specify your app's icon path (without extension)
    },
    makers: [
      {
        name: '@electron-forge/maker-squirrel',
        config: {
          name: 'financial_erp', // your app's name
        },
      },
      {
        name: '@electron-forge/maker-zip',
        config: {},
      },
    ],
  }
  