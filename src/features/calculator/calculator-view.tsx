import Grid from "@mui/material/Grid";
import { useState } from "react";
import { CalculatorForm, type FormInputs } from "./components/calculator-form";
import { CalculatorResults } from "./components/calculator-results";
import { calculateRetirement } from "./functions/calculate-retirement";

export const CalculatorView = () => {
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (formValues: FormInputs) => {
    const calculatedResult = calculateRetirement(formValues);
    setResult(calculatedResult);
  };

  return (
    <>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <CalculatorForm onSubmit={handleCalculate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CalculatorResults result={result} />
        </Grid>
      </Grid>
    </>
  );
};
