"use client";

import { useState } from "react";
import { createSubscriptionAction } from "./actions/p";
import CheckIcon from "./components/check";
import Logo from "./components/logo";
import MenuIcon from "./components/menu";
import { demoConfig } from "./config";

const Home = () => {
  const [selected, setSelected] = useState("");

  const handleSubscription = async (productId: string) => {
    try {
      setSelected(productId);

      const sessionId = await createSubscriptionAction(
        productId,
        demoConfig.publicKey,
        window.location.href
      );

      if (!sessionId) {
        return;
      }

      window.location.href = `https://pay.staging.lucidconnect.xyz/c/${sessionId}`;
    } finally {
      setSelected("");
    }
  };

  return (
    <>
      <header>
        <MenuIcon />
        <div className="logo">
          <Logo />
          <span>Virtual Grove</span>
        </div>
        <button id="manage-account">Manage</button>
      </header>
      <main>
        <h1>Discover Serenity in Every Virtual Breath.</h1>

        <div className="perks">
          <div className="perks--item">
            <CheckIcon />
            <span>Pay With Crypto</span>
          </div>
          <div className="perks--item">
            <CheckIcon />
            <span>Flexibility Guaranteed</span>
          </div>
          <div className="perks--item">
            <CheckIcon />
            <span>Cancel Anytime</span>
          </div>
        </div>

        <div className="grid">
          {demoConfig.plans.map((sub, index) => {
            const loading = selected === sub.productId;
            return (
              <div
                key={index}
                className={`subscription ${
                  index === 1 ? "subscription__dark" : ""
                }`}
              >
                <span className="subscription--title">{sub.name}</span>
                <span className="subscription--price">${sub.amount}</span>
                <span>per user, per month</span>
                <button
                  onClick={() => handleSubscription(sub.productId)}
                  className="subscription--button"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Pay with Lucid"}
                </button>

                <div className="subscription--dash"></div>

                <div className="subscription--features">
                  {sub.description.map((description, index) => {
                    return <span key={index}>{description}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
