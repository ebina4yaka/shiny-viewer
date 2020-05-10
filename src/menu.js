const { Menu, shell } = require('electron')
const openAboutWindow = require('about-window').default
const join = require('path').join

module.exports = (window) => {
  const template = [
    {
      label: 'メニュー',
      submenu: [
        {
          label: 'リロード',
          click () { window.loadURL('https://shinycolors.enza.fun') }
        },
        {
          label: 'シャイニーカラーズ 公式サイト',
          click () { shell.openExternal('https://shinycolors.idolmaster.jp/') }
        }
      ]
    },
    {
      label: 'ヘルプ',
      submenu: [
        {
          label: 'このアプリについて',
          click () {
            openAboutWindow({
              icon_path: join(__dirname, 'logo/icon.png'),
              copyright: 'Copyright (c) 2020 ebina4yaka',
              package_json_dir: join(__dirname, '../'),
              win_options: {
                parent: window,
                modal: true
              }
            })
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
