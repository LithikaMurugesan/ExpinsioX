import React from "react";
export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString(); // outputs 02/12/2025
};
