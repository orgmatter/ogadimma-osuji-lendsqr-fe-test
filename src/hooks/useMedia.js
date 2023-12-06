export const useMedia = (query) => {
   const media = window.matchMedia(query);
   return {
       media
   }
}