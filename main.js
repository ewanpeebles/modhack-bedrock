const {
    app, BrowserWindow, ipcMain
} = require('electron/main')
const path = require('node:path')

const start = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile(path.join(__dirname, 'pages', 'index.html'))

    ipcMain.handle('menuEvent', async (data) => {
        const [event, ...args] = data.split(' ')
        if (event === 'openProject') {
            win.loadFile(path.join(__dirname, 'pages', 'project.html'), {
                query: { id: args[0] }
            })
        }
    })
}

app.whenReady().then(() => {
    start()


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            start()
        }
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
})