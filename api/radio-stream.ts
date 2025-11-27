export const config = {
    runtime: 'edge',
};

export default async function handler(request: Request) {
    const STREAM_URL = 'http://195.26.251.31/listen/radioartistpro/radio.mp3';

    try {
        const response = await fetch(STREAM_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Compatible; ArtistProBot/1.0)',
                'Connection': 'keep-alive',
            },
        });

        if (!response.ok || !response.body) {
            return new Response(`Stream error: ${response.statusText}`, { status: response.status });
        }

        // Clonamos los headers importantes del stream original
        const headers = new Headers();
        headers.set('Content-Type', response.headers.get('Content-Type') || 'audio/mpeg');
        headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        headers.set('Access-Control-Allow-Origin', '*');

        // Importante: No establecer Content-Length para streams infinitos

        return new Response(response.body, {
            status: 200,
            headers: headers,
        });

    } catch (error) {
        console.error('Proxy error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
