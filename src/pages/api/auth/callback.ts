import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

const getURL = () => {
	let url =
		process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
		process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
		"http://localhost:4321/";
	// Make sure to include `https://` when not localhost.
	url = url.includes("http") ? url : `https://${url}`;
	// Make sure to include a trailing `/`.
	url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
	return url;
};

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
	const authCode = url.searchParams.get("code");

	if (!authCode) {
		return new Response("No code provided", { status: 400 });
	}

	const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

	if (error) {
		return new Response(error.message, { status: 500 });
	}

	const { access_token, refresh_token } = data.session;

	cookies.set("sb-access-token", access_token, {
		path: "/",
		secure: true,
		httpOnly: true,
	});
	cookies.set("sb-refresh-token", refresh_token, {
		path: "/",
		secure: true,
		httpOnly: true,
	});
	return redirect(getURL());
};
