interface LucidConfig {
  publicKey: string;
  environment: string;
}

interface Subscription {
  productId: string;
  amount: number;
  interval: number;
  nextChargeAt?: string;

  signature: string;
}

class Lucid {
  constructor(c: LucidConfig) {}
  createSubscription: (s: Subscription) => Promise<void>;
}

declare global {
  export interface Window {
    Lucid: typeof Lucid;
  }
}

export {};
