import React, { useState } from "react";

function InvestmentAdvisor() {
  const [economicCycle, setEconomicCycle] = useState("expansion");

  const getRecommendation = () => {
    switch (economicCycle) {
      case "expansion":
        return "주식 비중을 높이고, 위험 자산에 투자하세요.";
      case "contraction":
        return "채권 및 안전 자산(금)에 투자하세요.";
      default:
        return "포트폴리오의 균형을 유지하세요.";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">투자 전략 조언</h2>
      <select
        value={economicCycle}
        onChange={(e) => setEconomicCycle(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="expansion">경기 확장기</option>
        <option value="contraction">경기 수축기</option>
      </select>
      <p>{getRecommendation()}</p>
    </div>
  );
}

export default InvestmentAdvisor;
