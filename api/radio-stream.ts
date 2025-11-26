export const config = {
    runtime: 'edge',
};

export default async function handler(_request: Request) {
    const STREAM_URL = 'http://195.26.251.31/listen/radioartistpro/radio.mp3';

    try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch(STREAM_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'audio/mpeg, audio/*',
            },
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`Stream returned status: ${response.status}`);
            return new Response(JSON.stringify({
                error: 'Stream not available',
                status: response.status
            }), {
                status: 502,
                headers: { 'Content-Type': 'application/json' }
            });
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
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({
            error: 'Failed to connect to stream',
            details: errorMessage,
            streamUrl: STREAM_URL
        }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
