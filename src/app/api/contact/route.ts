import { NextResponse } from 'next/server'

/** Stub: POST /techneterra/rfq wiring planned Sprint T2 */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.info('[techneterra-web] contact stub', {
      lang: body?.lang,
      email: body?.email,
      name: body?.name,
    })
    return NextResponse.json({ ok: true, received: true }, { status: 202 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
