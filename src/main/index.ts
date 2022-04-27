/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, Menu } from 'electron';
import ElectronLog from 'electron-log';
import path from 'path';
import storage from 'electron-json-storage';
import MenuCtrl from './MenuCtrl';

const newLocal = 'update-electron-app';
require(newLocal)();

ElectronLog.info('Started App - ', 'mode: ', process.env.react_base);

// 중복 실행 금지
const shouldQuit = app.requestSingleInstanceLock();
if (!shouldQuit) {
  app.quit();
}

function main() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
  });
  if (process.env.react_base.runtimeMode === 'local') {
    mainWindow.loadURL('http://localhost:9000/');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist-web/index.html'));
  }
}

app.whenReady().then(() => {
  // const regexObj = {
  //   ex0: '([^.|을|를])\n+',
  //   ex1: '(에)\n+(는|도|서)',
  // };

  // storage.set('regex-setting', {}, (e) => {
  //   if (e)
  //     log.info('regex-setting', '세팅에 실패 하였습니다.', e, userSetting);
  // });
  main();
  const menuCtrl = new MenuCtrl();
  const menu = Menu.buildFromTemplate(menuCtrl.menu);
  Menu.setApplicationMenu(menu);
});
