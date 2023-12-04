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
      "0xd5fa29f78bdefc703d17f3e4f61b900c5f6e7bd41eb38f47f466fece44c9187f27af85fb4262b640c8aebf0136abe698b78464fd14e5b5ae3b4d71d113079f4c00",
  },
  business: {
    amount: 5,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0x352367a1fd85a4c540d9862a026c29ecf9aba64ff5e7bc8742fc20aee6d3778f4c6ef3c38700700168f0620881b690845a537e8dd2b60234b128308076758c4d01",
  },
  enterprise: {
    amount: 20,
    interval: 30,
    productId: demoConfig.productId,
    signature:
      "0xfbad5a5668f81b8478d5c108561c968bd3f57159f788cc4de52c35da080033ae59ceab9fc9033b009ebf15596f5f895a9b75eb6a05465e6b7fca65e0e32fef6600",
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
