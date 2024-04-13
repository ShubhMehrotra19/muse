import React from 'react';
import MusciListComponent from './musicListComponent';

interface Props {}

function FriendSuggestion(props: Props) {
  const {} = props;

  return (
    <div>
      <div className='mb-1 w-full '><p className='text-base font-semibold text-slate-600'>Explore Music...</p></div>
    <div className='border-2 border-slate-300/70 rounded-md py-1'>
      <div className="flex flex-col items-center">
        <div className='flex flex-col justify-between items-center h-[200px] overflow-y-scroll scroll-smooth rounded-md px-5' style={{ scrollbarWidth: 'none'}}>
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
          <MusciListComponent />
        </div>
      </div>
    </div>
    </div>
  );
}

export default FriendSuggestion;
