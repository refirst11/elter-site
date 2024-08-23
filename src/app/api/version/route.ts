import { NextResponse } from 'next/server'

export async function GET() {
  const url = process.env.VERSION || ''

  try {
    const res = await fetch(url)
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch package data' }, { status: 500 })
    }
    const data = await res.json()
    const version = data?.['dist-tags']?.latest || null

    return NextResponse.json({ version })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching version' }, { status: 500 })
  }
}
