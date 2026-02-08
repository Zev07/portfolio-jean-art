import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
name: z.string().min(2, "Nome muito curto"),
email: z.string().email("Email inválido"),
message: z.string().min(10, "Mensagem muito curta (mínimo 10 caracteres)").max(1000, "Mensagem muito longa"),
gotcha: z.string().optional(),
token: z.string().min(1, "Token de segurança ausente"),
});

export async function POST(request: Request) {
try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
    return NextResponse.json(
        { error: "Dados inválidos", details: result.error.flatten() },
        { status: 400 }
    );
    }

    const { name, email, message, gotcha, token } = result.data;

    if (gotcha) {
    console.warn(`Bot detectado (Honeypot): ${email}`);
    return NextResponse.json({ success: true });
    }
    const turnstileVerify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        }),
    }
    );

    const turnstileData = await turnstileVerify.json();

    if (!turnstileData.success) {
    return NextResponse.json(
        { error: "Verificação de segurança falhou" },
        { status: 403 }
    );
    }

    console.log("Email legítimo recebido:", { name, email, message });

    return NextResponse.json({ success: true });

} catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
    { error: "Erro interno do servidor" },
    { status: 500 }
    );
}
}