// Intercept all requests. Allow everything EXCEPT /protected/* without the cookie.
type Bindings = {
    PASSWORD: string;
    ASSETS: Fetcher; // <-- tells TS that env.ASSETS is a fetcher
};

export const onRequest: PagesFunction<Bindings> = async (ctx) => {
    const { request, env } = ctx;
    const url = new URL(request.url);

    if (!url.pathname.startsWith("/protected/")) {
        return env.ASSETS.fetch(request);
    }

    const cookie = request.headers.get("Cookie") || "";
    const hasGate = cookie.includes("gate=ok");
    if (!hasGate) return new Response("Unauthorized", { status: 401 });

    return env.ASSETS.fetch(request);
};