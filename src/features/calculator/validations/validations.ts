import * as yup from "yup";

export const calculatorSchema = yup.object({
  currentAge: yup
    .number()
    .typeError("Current age must be a number")
    .required("Current age is required")
    .min(0, "Age must be at least 0"),

  retirementAge: yup
    .number()
    .typeError("Retirement age must be a number")
    .required("Retirement age is required")
    .moreThan(
      yup.ref("currentAge"),
      "Retirement age must be greater than current age"
    ),

  currentSavings: yup
    .number()
    .typeError("Current savings must be a number")
    .required("Current savings is required")
    .min(0, "Savings cannot be negative"),

  monthlyContribution: yup
    .number()
    .typeError("Monthly contribution must be a number")
    .required("Monthly contribution is required")
    .min(0, "Contribution cannot be negative"),

  annualInterestRate: yup
    .number()
    .typeError("Annual return must be a number")
    .required("Annual return is required")
    .min(0, "Return rate must be 0% or more")
    .max(100, "Return rate must be 100% or less"),

  expectedInflationRate: yup
    .number()
    .required("Expected inflation is required")
    .min(0, "Inflation rate must be 0 or more")
    .max(100, "That inflation rate seems unrealistic"),
});
