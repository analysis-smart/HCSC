'use client'

import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react';
import {useWallet} from '@suiet/wallet-kit';

export default function ObjectIdPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <Suspense fallback={<div>Loading...</div>}>
                <ObjectIdContent />
            </Suspense>
        </main>
    );
}
function ObjectIdContent() {
    const searchParams = useSearchParams();
    const object_id = searchParams.get('objectId');
    const wallet = useWallet();

    return (
        <div>
            Object id: {object_id ?? 'No objectId provided'}
            <p>{wallet.address}</p>
        </div>
    );
}
