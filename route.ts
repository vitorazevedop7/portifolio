import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL ?? 'vitorazevedo.p7@gmail.com'],
      replyTo: email,
      subject: `Nova mensagem de ${name} — Portfólio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #1A1A18; margin-bottom: 8px;">Nova mensagem do portfólio</h2>
          <hr style="border: none; border-top: 1px solid #E4E2DE; margin-bottom: 24px;" />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin-top: 16px;"><strong>Mensagem:</strong></p>
          <p style="background: #F7F5F2; padding: 16px; border-radius: 8px; line-height: 1.7;">${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border: none; border-top: 1px solid #E4E2DE; margin-top: 24px;" />
          <p style="color: #7A7A72; font-size: 0.8rem;">Enviado via formulário de contato — vitor-portfolio.vercel.app</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Erro interno ao enviar e-mail' }, { status: 500 })
  }
}
