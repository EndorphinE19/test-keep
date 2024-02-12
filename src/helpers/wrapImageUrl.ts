/**
 * Возвращает корректный url для отображения картинки
 * @param url url
 * @returns url
 */
export const wrapImagerUrl = (url: string) => {
    console.log(import.meta.url)
    return new URL(url, import.meta.url).href
}