export async function onRequestPost(ctx) {
    const { request, env } = ctx;
    const form = await request.formData();
    const entered = form.get("password");

    if (entered !== env.PASSWORD) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Logged-in marker for 1 day
    return new Response("OK", {
        headers: {
            "Set-Cookie":
                "gate=ok; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax",
        },
    });
}