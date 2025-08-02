import type { FormInputs } from "../components/calculator-form";

export type ProjectionYear = {
  year: number;
  value: number;
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
  } = data;

  const years = retirementAge - currentAge;
  const rate = annualInterestRate / 100;
  let total = currentSavings;
  const yearlyContribution = monthlyContribution * 12;

  const projection: ProjectionYear[] = [];

  for (let i = 0; i <= years; i++) {
    if (i > 0) total += yearlyContribution;
    total *= 1 + rate;
    projection.push({
      year: currentAge + i,
      value: total,
    });
  }

  return projection;
}
