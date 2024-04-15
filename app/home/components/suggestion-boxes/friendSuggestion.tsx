import React from 'react';
import FriendListComponent from './friendListComponent';
interface Props {}

function FriendSuggestion(props: Props) {
  const {} = props;

  return (
    <div className='select-none'>
    <div className='mb-1 w-full '><p className='text-base font-semibold text-slate-600'>Friend Suggestions...</p></div>
    <div className='border-2 border-slate-300/70 rounded-md py-1'>
      <div className="flex flex-col items-center">
        <div className='flex flex-col justify-between items-center h-[280px] overflow-y-scroll scroll-smooth rounded-md px-5' style={{ scrollbarWidth: 'none'}}>
          <FriendListComponent />
          <FriendListComponent />
          <FriendListComponent />
          <FriendListComponent />
          <FriendListComponent />
          <FriendListComponent />
          <FriendListComponent />
        </div>
      </div>
    </div>
    </div>
  );
}

export default FriendSuggestion;
