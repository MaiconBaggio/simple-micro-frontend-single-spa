import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mai/template",
  app: () => System.import("@mai/template"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@mai/app1",
  app: () => System.import("@mai/app1"),
  activeWhen: ["/app1"]
});


registerApplication({
  name: "@mai/app2",
  app: () => System.import("@mai/app2"),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});
