export const config = {
    runtime: 'edge',
};

export default async function handler(_request: Request) {
    const STREAM_URL = 'http://195.26.251.31/listen/radioartistpro/radio.mp3';

    try {
        const response = await fetch(STREAM_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
            },
        });

        if (!response.ok) {
            return new Response('Stream not available', { status: 502 });
        }

        // Forward the stream with proper headers
        return new Response(response.body, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Range',
            },
        });
    } catch (error) {
        console.error('Stream proxy error:', error);
        return new Response('Failed to connect to stream', { status: 502 });
    }
}
