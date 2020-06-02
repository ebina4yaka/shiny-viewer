const { app, BrowserWindow, shell } = require('electron')
const initWindowMenu = require('./menu.js')

const createWindow = () => {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36'
  const width = 1136
  const height = 640
  const window = new BrowserWindow({
    width: width,
    minWidth: width,
    height: height,
    minHeight: height + 20,
    useContentSize: true
  })

  window.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
  })

  initWindowMenu(window)

  window.loadURL('https://shinycolors.enza.fun', { userAgent: userAgent })
}

app.allowRendererProcessReuse = true
app.whenReady().then(createWindow)
