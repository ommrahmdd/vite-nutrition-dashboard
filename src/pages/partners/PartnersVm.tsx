import React, { useState } from "react";

export function usePartners() {
  const [parnters, setPartners] = useState<any[]>([]);
  const updatePartners = (data: any) => {
    setPartners(data);
  };
  return {
    parnters,
    updatePartners,
  };
}
