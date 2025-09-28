const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjExNjc4NjMsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhkQTAyRENkNjkxNzM5NjEyOTc2ZTVBMTk5OGI3MjhBNmI1MTIwNTgwIn0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LWFwcC1zYW5kLnZlcmNlbC5hcHAifQ",
    signature: "MHhkMDA5NDZkZWIxZTE4MTdkMGQwZWExNzE2ZWY3Y2RlN2FiZjEwZDI0MmVhYjlmMDNhYjY5ZDVkYzFiNDhlMzc0NjhhODNmMTA0NjM3NTFkYjM0MTQyNTM4Mjk5NDkyZGZkMGJhYjc0ODBkNjBiYmI2N2NiZjNjZTljNzI0YjFmZTFi",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
