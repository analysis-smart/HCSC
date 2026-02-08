'use client'

import { useSearchParams } from 'next/navigation'

export default function ObjectIdPage() {
    const searchParams = useSearchParams()
    const object_id = searchParams.get('objectId')

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            Object id: {object_id ?? 'No objectId provided'}
        </main>
    )
}

