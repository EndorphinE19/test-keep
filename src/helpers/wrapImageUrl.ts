/**
 * Возвращает корректный url для отображения картинки
 * @param url url
 * @returns url
 */
export const wrapImagerUrl = (url: string) => {
    return new URL(url, import.meta.url).href
}
