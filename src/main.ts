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
      "0xd94f58d218c293a99edc20e19ef22711ab7cd1c638d07c0167cd5cd4ee3de2c8432d241ef650f1352c611ee80cf8ac15ac3a52088c2f4df13661041596314caa01",
  },
  business: {
    amount: 5,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0xef8bbd4c8cd789f7f659889d880ee8fe9dbb844dbce3bcd23e2b09bd244f4cb51ce8af482000e54d1672021490ed62a98b441e0c8723feedede9e89826b5123b01",
  },
  enterprise: {
    amount: 20,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0xc065d3d42cfe941166ae99d2152b51b804c5df185a3a7b685ac43a8c88bd5b652af0d0621483ebca4f6751f50f421e8ecf8978e691a3c9fc77205f1b6e14ae5001",
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
