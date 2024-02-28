import { Button } from '@/components/ui/button'
import React from 'react'
import UrlCard from './_components/url-card'
import { getSelf } from '@/lib/auth-service'
import { getStreamByUserId } from '@/lib/stream-service'
import KeyCard from './_components/key-card'
import ConnectModal from './_components/connect-modal'

const Keys = async () => {

    const self = await getSelf()
    const stream = await getStreamByUserId(self.id);

  return (
    <div
        className='p-6'
    >
        <div className='flex items-center justify-between mb-4' >
            <h1 className='text-2xl font-bold' >
                Keys & URLS
            </h1>
            <ConnectModal />
        </div>
        <div className='flex flex-col w-full gap-y-4' >
            <UrlCard value={stream?.serverUrl ?? null} />
            <KeyCard value={stream?.streamKey ?? null } />
        </div>
    </div>
  )
}

export default Keys