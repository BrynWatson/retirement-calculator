import Grid from "@mui/material/Grid";
import { useState } from "react";
import { CalculatorForm } from "./components/calculator-form";
import { CalculatorResults } from "./components/calculator-results";
import {
  calculateRetirementProjection,
  type ProjectionYear,
} from "./functions/calculate-retirement";
import type { FormInputs } from "./components/calculator-form";

export const CalculatorView = () => {
  const [projection, setProjection] = useState<ProjectionYear[] | null>(null);

  const handleCalculate = (formValues: FormInputs) => {
    const calculatedProjection = calculateRetirementProjection(formValues);
    setProjection(calculatedProjection);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <CalculatorForm onSubmit={handleCalculate} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <CalculatorResults projection={projection} />
      </Grid>
    </Grid>
  );
};
