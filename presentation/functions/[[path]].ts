// Intercept all requests. Allow everything EXCEPT /protected/* without the cookie.
export const onRequest: PagesFunction = async (ctx) => {
    const { request, env } = ctx;
    const url = new URL(request.url);

    const wantsProtected = url.pathname.startsWith("/protected/");
    if (!wantsProtected) {
        // serve normally
        return env.ASSETS.fetch(request);
    }

    // Check cookie
    const cookie = request.headers.get("Cookie") || "";
    const hasGate = cookie.split(/;\s*/).some((c) => c.startsWith("gate=ok"));

    if (!hasGate) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Authorized → serve the asset
    return env.ASSETS.fetch(request);
};