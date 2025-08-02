import type { FormInputs } from "../components/calculator-form";

export type ProjectionYear = {
  year: number;
  value: number;
  adjustedValue: number;
};

export function calculateRetirementProjection(
  data: FormInputs
): ProjectionYear[] {
  const {
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualInterestRate,
    expectedInflationRate = 0,
  } = data;

  const years = retirementAge - currentAge;
  const rate = annualInterestRate / 100;
  const inflation = expectedInflationRate / 100;

  let total = currentSavings;
  const yearlyContribution = monthlyContribution * 12;

  const projection: ProjectionYear[] = [];

  for (let i = 0; i <= years; i++) {
    if (i > 0) total += yearlyContribution;
    total *= 1 + rate;

    const inflationAdjusted = total / Math.pow(1 + inflation, i);

    projection.push({
      year: currentAge + i,
      value: total,
      adjustedValue: inflationAdjusted,
    });
  }

  return projection;
}
