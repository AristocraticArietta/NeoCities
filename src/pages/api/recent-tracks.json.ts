// src/pages/api/recent-tracks.json.ts
import type { APIRoute } from 'astro';
import { LASTFM_API_KEY, LASTFM_USERNAME } from 'astro:env/server';

export const GET: APIRoute = async () => {
  const API_KEY = LASTFM_API_KEY; 
  const USERNAME = LASTFM_USERNAME;

  if (!API_KEY || !USERNAME) {
    return new Response(
      JSON.stringify({ error: 'Missing Last.fm configuration environment variables.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  try {
    // Fetch only the 5 most recent tracks
    const recentUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&limit=5&format=json`;
    const recentRes = await fetch(recentUrl);
    const recentData = await recentRes.json();
    
    const rawTracks = recentData.recenttracks?.track || [];
    const tracks = Array.isArray(rawTracks) ? rawTracks.slice(0, 5) : [rawTracks];

    // Map only the necessary details
    const formattedTracks = tracks.map((track: any) => {
      const title = track.name;
      const artist = track.artist?.['#text'] || '';
      const album = track.album?.['#text'] || '';
      const image = track.image?.[track.image.length - 1]?.['#text'] || '';
      const isNowPlaying = track['@attr']?.nowplaying === 'true';
      const url = track.url || '';

      return {
        title,
        artist,
        album,
        image: image || 'https://via.placeholder.com/150', // fallback image
        isNowPlaying,
        url,
      };
    });

    return new Response(JSON.stringify(formattedTracks), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch music data from Last.fm',
        details: error.message || error,
        stack: error.stack
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};