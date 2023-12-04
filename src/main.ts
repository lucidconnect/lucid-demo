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
      "0xf44b353ac0365cfc16171c3ceaabbf96a7bd205a50d4f7083599f0b605b32b8525b9b393331fe77b8c44052fc223fb1e18b16353fe6e708fa7178095fcbadc4300",
  },
  business: {
    amount: 5,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0xc72ccd43f0ea15a8c5be38fb64a3b9e04c7906cf940fb92ed00002593940b83e297abca1b67c76b2ecb881b8e4311098fd9a6e695633741073fef4adb7537b2401",
  },
  enterprise: {
    amount: 20,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0xd474c747fbef6bec016cee01d7f9e1b713a8d20596e98f808785b8d40150112258458183edf97967b27abdfd9276d48010e6b3d5de873781fa688c221416a41e00",
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
