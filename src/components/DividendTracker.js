import React, { useState, useEffect } from "react";
import axios from "axios";

function DividendTracker() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // API에서 배당주 데이터를 가져오는 로직
    // 예시: axios.get('api/dividends').then(res => setStocks(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">안정적인 배당주 추천</h2>
      {/* 배당주 목록 및 필터링 UI 구현 */}
    </div>
  );
}

export default DividendTracker;
