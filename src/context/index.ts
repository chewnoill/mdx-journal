

export const getPage = (page: string) => window.localStorage.getItem(`page/${page}`)
export const writePage = (page: string, code: string) => {
  const pages = getPages();
  if(!pages.includes(page)){
    setPages([...pages,page])
  }
  window.localStorage.setItem(`page/${page}`, code)
}

export const getPages = () => JSON.parse(window.localStorage.getItem('pages') || '[]')
export const setPages = (pages: string[]) => window.localStorage.setItem('pages', JSON.stringify(pages))
