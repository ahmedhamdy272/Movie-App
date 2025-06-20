declare module "./appwrite.js" {
  export function getTrendingMovies(): Promise<any[]>;
  export function updateSearchCount(
    searchTerm: string,
    movie: any
  ): Promise<void>;
}
