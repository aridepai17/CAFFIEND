import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  calculateCurrentCaffeineLevel,
  getCaffeineAmount,
  timeSinceConsumption,
} from "../utils";
import { useAuth } from "../context/AuthContext";

export default function History() {
  const { globalData } = useAuth();

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline" />
        <h2>History</h2>
      </div>
      <p>
        <i>Tap a mug for more info!</i>
      </p>
      <div className="coffee-history flex flex-wrap gap-3 mt-4">
        {Object.keys(globalData)
          .sort((a, b) => b - a)
          .map((utcTime, coffeeIndex) => {
            const coffee = globalData[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utcTime]: coffee,
            });

            const summary = `${coffee.name} | ${timeSinceConsume} ago | ₹${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;

            return (
              <Tippy
                key={coffeeIndex}
                content={summary}
                trigger="click"
                interactive={true}
              >
                <div>
                  <i className="fa-solid fa-mug-hot text-2xl cursor-pointer" />
                </div>
              </Tippy>
            );
          })}
      </div>
    </>
  );
}
