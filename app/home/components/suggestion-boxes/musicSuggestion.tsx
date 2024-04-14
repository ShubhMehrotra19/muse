"use client"
import React, { useState, useEffect } from 'react';
import MusicListComponent from './musicListComponent';

interface Song {
  songName: string;
  artistName: string;
  imageLink: string;
}

function FriendSuggestion() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/dummyData/songs.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className='mb-1 w-full '><p className='text-base font-semibold text-slate-600'>Explore Music...</p></div>
            <div className='border-2 border-slate-300/70 rounded-md py-1'>
              <div className="flex flex-col items-center">
                <div className='flex flex-col justify-between items-center h-[200px] overflow-y-scroll scroll-smooth rounded-md px-5' style={{ scrollbarWidth: 'none'}}>
                {songs.map((song) => (
        <MusicListComponent
          key={song.songName}
          songName={song.songName}
          artistName={song.artistName}
          imgLink={song.imageLink}
        />
      ))}
                </div>
              </div>
            </div>
    </div>
  );
}

export default FriendSuggestion;
