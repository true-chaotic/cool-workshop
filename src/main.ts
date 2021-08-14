import { ipcMain } from 'electron';
import { UPLOAD_SITE } from './consts';

ipcMain.on(UPLOAD_SITE, (e, options: {
  login: string,
  password: string,
  folder: string
}) => {
  // eslint-disable-next-line no-console
  console.log({ options });
});
