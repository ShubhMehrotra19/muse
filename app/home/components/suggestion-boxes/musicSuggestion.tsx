"use client"
import React, { useState, useEffect } from 'react';
import MusicListComponent from './musicListComponent';
import songs from '../../../../dummyData/songs.json'

interface Song {
  index: number;
  songName: string;
  artistName: string;
  imageLink: string;
}

function FriendSuggestion() {
  const [isSongs, setIsSongs] = useState<Song[]>([]);

  useEffect(() => {
    setIsSongs(songs.songs);
  }, []);

  return (
    <div className='select-none'>
      <div className='mb-1 w-full '><p className='text-base font-semibold text-slate-600'>Explore Music...</p></div>
      <div className='border-2 border-slate-300/70 rounded-md py-1'>
        <div className="flex flex-col items-center">
          <div className='flex flex-col justify-between items-center h-[200px] overflow-y-scroll scroll-smooth rounded-md px-5' style={{ scrollbarWidth: 'none'}}>
            {isSongs.map((song: Song) => (
              <MusicListComponent
                key={song.index}
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

