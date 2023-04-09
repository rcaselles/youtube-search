interface Thumbnail {
  id: string;
  url: string;
  height: number;
  width: number;
}

interface Snippet {
  url: string;
  duration: string;
  publishedAt: string;
  thumbnails: Thumbnail;
  title: string;
  views: string;
}

interface Video {
  id: {
    videoId: string;
  };
  url: string;
  title: string;
  channelName: string;
  description: string;
  duration_raw: string;
  snippet: Snippet;
  views: string;
}

export default function isObjectWithExpectedProperties(obj: any): obj is Video {
  // Comprobar si el objeto es un objeto y no es nulo
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  // Comprobar si el objeto tiene las propiedades esperadas
  if (
    !('id' in obj) ||
    !('url' in obj) ||
    !('title' in obj) ||
    !('channelName' in obj) ||
    !('description' in obj) ||
    !('duration_raw' in obj) ||
    !('snippet' in obj) ||
    !('views' in obj)
  ) {
    return false;
  }

  // Comprobar si la propiedad "id" tiene la estructura esperada
  if (!('videoId' in obj.id) || typeof obj.id.videoId !== 'string') {
    return false;
  }

  // Comprobar si la propiedad "snippet" tiene la estructura esperada
  if (
    typeof obj.snippet !== 'object' ||
    obj.snippet === null ||
    !('url' in obj.snippet) ||
    !('duration' in obj.snippet) ||
    !('publishedAt' in obj.snippet) ||
    !('thumbnails' in obj.snippet) ||
    !('title' in obj.snippet) ||
    !('views' in obj.snippet)
  ) {
    return false;
  }

  // Comprobar si la propiedad "thumbnails" de "snippet" tiene la estructura esperada
  if (
    typeof obj.snippet.thumbnails !== 'object' ||
    obj.snippet.thumbnails === null ||
    !('id' in obj.snippet.thumbnails) ||
    !('url' in obj.snippet.thumbnails) ||
    !('height' in obj.snippet.thumbnails) ||
    !('width' in obj.snippet.thumbnails)
  ) {
    return false;
  }

  // Si todas las comprobaciones anteriores son verdaderas, entonces el objeto tiene la estructura esperada
  return true;
}
