import { ipcRenderer, contextBridge } from 'electron';
import { WorkshopApi } from './types';
import { UPLOAD_SITE } from './consts';

const API: WorkshopApi = {
  uploadSite: (options) => {
    ipcRenderer.send(UPLOAD_SITE, options);
  },
};

contextBridge.exposeInMainWorld(
  'workshopApi',
  API,
);
