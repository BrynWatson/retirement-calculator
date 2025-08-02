export const calculateRetirement = ({
  currentAge,
  retirementAge,
  currentSavings,
  monthlyContribution,
  annualInterestRate,
}: {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualInterestRate: number;
}) => {
  const years = retirementAge - currentAge;
  const r = annualInterestRate / 100;

  const futureValue =
    currentSavings * Math.pow(1 + r, years) +
    monthlyContribution * 12 * ((Math.pow(1 + r, years) - 1) / r);

  return futureValue;
};
