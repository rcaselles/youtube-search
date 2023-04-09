import { searchVideo } from './lib/search';

export function search(searchQuery: string): Promise<any[]> {
  return searchVideo(searchQuery);
}
