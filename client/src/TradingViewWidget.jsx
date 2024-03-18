// TradingViewWidget.js
import React, { useEffect } from 'react';
import './TradingViewWidget.css'; // Import the CSS file for styling

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": 1000,
      "height": 690,
      "defaultRoW": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "dark",
      "locale": "en"
    });

    document.getElementById('tradingview-widget-container').appendChild(script);

    return () => {
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div className="marquee-container">
      <div id="tradingview-widget-container" className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            {/* <span className="blue-text">Track all markets on TradingView</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
