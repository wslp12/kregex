// import { IUserCtrl } from './UserSettingCtrl';
import storage from 'electron-json-storage';
import { app, BrowserView, BrowserWindow, dialog } from 'electron';
import path from 'path';
import ElectronLog from 'electron-log';

class MenuCtrl {
  // userCtrl: IUserCtrl;
  private menus: Electron.MenuItemConstructorOptions[];

  get menu() {
    return this.menus;
  }

  constructor() {
    this.menus = [
      {
        label: 'regex',
        submenu: [
          {
            label: '정규표현식 수정',
            // type: 'checkbox',
            click: (mi, bw) => {
              ElectronLog.info('click');
              // UserSettingCtrl.setAutoStart(mi.checked);
            },
          },
          {
            label: '버전 정보',
            role: 'about',
          },
        ],
      },
      {
        label: '수정',
        submenu: [
          { label: '실행 취소', role: 'undo' },
          { label: '실행 복귀', role: 'redo' },
          { type: 'separator' },
          { label: '잘라내기', role: 'cut' },
          { label: '복사하기', role: 'copy' },
          { label: '붙여넣기', role: 'paste' },
          { label: '모두 선택', role: 'selectAll' },
        ],
      },
      {
        label: '보기',
        submenu: [
          {
            label: '항상 앞으로',
            type: 'checkbox',
            click: (e, bw) => {
              if (bw) bw.setAlwaysOnTop(e.checked);
            },
          },
        ],
      },
    ];
  }
}

export default MenuCtrl;
