export type WorkshopApi = {
  uploadSite: (options: {
    login: string,
    password: string,
    folder: string
  }) => void
};

declare global {
  interface Window {
    workshopApi: WorkshopApi
  }
}
