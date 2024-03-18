import React, { useState, useEffect } from 'react';

const DepositManager = ({ username }) => {
  const [depositAmount, setDepositAmount] = useState(() => {
    // Get the deposit amount from localStorage or set it to 0 if not found
    const storedAmount = localStorage.getItem(`depositAmount_${username}`);
    return storedAmount ? parseFloat(storedAmount) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDepositAmount(prevAmount => {
        const newAmount = prevAmount * 0.000000001;
        localStorage.setItem(`depositAmount_${username}`, newAmount);
        return newAmount;
      });
    }, 3000); // Change interval to 3 seconds

    return () => clearInterval(interval);
  }, [username]);

  return depositAmount.toFixed(2);
};

export default DepositManager;
