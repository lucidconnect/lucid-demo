export const demoConfig = {
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_PRIVATE_KEY,
  productId: import.meta.env.VITE_PRODUCT_ID,
};

const startupButton = document.querySelector("#subscribe-startup");
const businessButton = document.querySelector("#subscribe-business");
const enterpriseButton = document.querySelector("#subscribe-enterprise");

startupButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    privateKey: demoConfig.privateKey,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 1,
    interval: 30,
  });
});

businessButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    privateKey: demoConfig.privateKey,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 5,
    interval: 30,
  });
});

enterpriseButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    privateKey: demoConfig.privateKey,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 20,
    interval: 30,
  });
});

export {};