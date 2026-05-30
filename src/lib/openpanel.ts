import { OpenPanel } from "@openpanel/web";

export const op = new OpenPanel({
  apiUrl: "https://analytics.bingewave.net/api",
  clientId: "58c7e0b4-dc87-4a0e-91e3-ad230cb1a2f7",
  trackScreenViews: true, // Automatically captures page and route changes
  trackOutgoingLinks: true, // Tracks when users click links leading away from your site
  trackAttributes: true, // Allows declarative event tracking via HTML attributes
  sessionReplay: {
    enabled: true,
  },
});
