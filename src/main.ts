import { demoConfig } from "./config";

const startupButton = document.querySelector("#subscribe-startup");
const businessButton = document.querySelector("#subscribe-business");
const enterpriseButton = document.querySelector("#subscribe-enterprise");

const connectButton = document.querySelector("#manage-account");

const subscriptionData = {
  startup: {
    amount: 1,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0x329e652d46bf7448fec8c62cd918b98b87ab5f9a858cd6bfafff49ddd6c20c660983556eea0d88d41a34a23ce0edcf33812f786b9b3cb2c9f3cbd5fa7bd6902500",
  },
  business: {
    amount: 5,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0x357e20c6bd484a05b19e53695b9ceb3e951b1005959eeb5e01e144e627393fe521f838c7374f54332184c43263c93e1a84695d3bdeccb345ef7e053a84e5c7ff01",
  },
  enterprise: {
    amount: 20,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0x7491757cf57d58af2d41e2b64baebf41743fa9927cc2d226d161719d4b86a7067a1c3f6be1eba90368d95407f58c236527b478c6184417f8732390dfaf6fed3601",
  },
};

startupButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription(subscriptionData.startup);
});

businessButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription(subscriptionData.business);
});

enterpriseButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription(subscriptionData.enterprise);
});

connectButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.connect({
    productId: demoConfig.productId,
  });
});

export {};
