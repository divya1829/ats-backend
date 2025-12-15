const allowedTransitions = {
  Applied: ["Screening", "Rejected"],
  Screening: ["Interview", "Rejected"],
  Interview: ["Offer", "Rejected"],
  Offer: ["Hired", "Rejected"]
};

exports.validateTransition = (fromStage, toStage) => {
  if (!allowedTransitions[fromStage]?.includes(toStage)) {
    throw new Error("Invalid application stage transition");
  }
};
