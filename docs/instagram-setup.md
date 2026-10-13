# Connect the chapter Instagram feed

The site reads the six most recent media items on the server using Instagram API with Instagram Login. It supports images, carousel cover images, and reel thumbnails. It links each card to the original post. Responses are cached for one hour. Missing credentials, empty feeds, timeouts, and API errors show a useful Instagram link instead of breaking the page.

## Account setup

1. The chapter Instagram account must be a professional Business or Creator account. A Facebook Page is not required for this login method.
2. In Meta for Developers, create/configure an app with Instagram API with Instagram Login. Follow Meta’s setup instructions, connect the chapter account, and grant `instagram_business_basic` for reading profile/media. Complete tester invitations and access/app review requirements shown by Meta for your intended use.
3. Obtain the Instagram professional account ID and a long-lived Instagram User access token through Meta’s authorization/token exchange flow. Select a currently supported API version in your app dashboard.
4. Copy `.env.example` to `.env.local` and fill in all three variables. Restart `npm run dev`. Set the same variables in your hosting provider’s server environment and redeploy for production. Use a Next.js server host, not static export.
5. Check the homepage and Events page for real posts. Verify reel thumbnails and carousel links with actual account media. Test a bad token locally to verify the fallback.

Do not put tokens in source control, browser code, NEXT*PUBLIC* variables, chat, or URLs. The implementation sends the token in a server-side Authorization header and does not log upstream responses.

## Token maintenance

Long-lived tokens expire. Track the expiry returned by Meta. Follow Meta’s refresh flow before expiry (typically a 60-day lifetime; refresh rules apply), update the server secret, and redeploy/restart. Automatic renewal and multi-account OAuth onboarding are not included. If a token expires, the site falls back to the chapter’s Instagram profile until it is replaced; previously cached content may remain until cache revalidation.

Official references:

- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login/
- https://www.postman.com/meta/instagram/ (Meta’s official API collection)
