// Cloudflare Pages Function
export const onRequestPost: PagesFunction<{ PASSWORD: string }> = async (ctx) => {
    const { request, env } = ctx;
    const data = await request.formData();
    const pwd = (data.get("password") || "").toString();

    if (pwd !== env.PASSWORD) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Set an HttpOnly cookie for 1 day
    const headers = new Headers({
        "Set-Cookie": `gate=ok; Path=/; Max-Age=86400; HttpOnly; SameSite=Lax; Secure`,
        "Content-Type": "application/json",
    });
    return new Response(JSON.stringify({ ok: true }), { headers });
};