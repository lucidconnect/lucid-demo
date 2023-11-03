const demoConfig = {
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  productId: import.meta.env.VITE_PRODUCT_ID,
  environment: "development",
};

const startupButton = document.querySelector("#subscribe-startup");
const businessButton = document.querySelector("#subscribe-business");
const enterpriseButton = document.querySelector("#subscribe-enterprise");

startupButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 1,
    interval: 30,
    signature:
      "0xd5fa29f78bdefc703d17f3e4f61b900c5f6e7bd41eb38f47f466fece44c9187f27af85fb4262b640c8aebf0136abe698b78464fd14e5b5ae3b4d71d113079f4c00",
  });
});

businessButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 5,
    interval: 30,
    signature:
      "0xd5fa29f78bdefc703d17f3e4f61b900c5f6e7bd41eb38f47f466fece44c9187f27af85fb4262b640c8aebf0136abe698b78464fd14e5b5ae3b4d71d113079f4c00",
  });
});

enterpriseButton?.addEventListener("click", async () => {
  const lucid = new window.Lucid({
    publicKey: demoConfig.publicKey,
    environment: demoConfig.environment,
  });

  await lucid.createSubscription({
    productId: demoConfig.productId,
    amount: 20,
    interval: 30,
    signature:
      "0xfbad5a5668f81b8478d5c108561c968bd3f57159f788cc4de52c35da080033ae59ceab9fc9033b009ebf15596f5f895a9b75eb6a05465e6b7fca65e0e32fef6600",
  });
});

export {};
