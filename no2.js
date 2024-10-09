function investigateCase(evidence) {
  let score = 0;

  // Criteria evaluation
  if (evidence.cyanideInStomach) score += 50;
  if (evidence.cyanideInStomachAmount > 50) score += 500;
  if (evidence.clearCCTV) score += 250;
  else if (evidence.blurredCCTV) score += 150;
  if (evidence.fingerprints) score += 100;
  if (evidence.suspiciousMovements) score += 50;
  if (evidence.cyanideInPocket) score += 750;

  // Decision based on score and specific evidence
  const isMurder = score > 1300 && evidence.clearCCTV && evidence.fingerprints;

  return {
    score: score,
    isMurder: isMurder
      ? "Yes, it's a murder."
      : "No, it's not confirmed as a murder.",
  };
}

// Example usage:
const evidence = {
  cyanideInStomach: true,
  cyanideInStomachAmount: 60,
  clearCCTV: true,
  blurredCCTV: false,
  fingerprints: true,
  suspiciousMovements: true,
  cyanideInPocket: true,
};

const result = investigateCase(evidence);
console.log(`Total Score: ${result.score}`);
console.log(result.isMurder);
