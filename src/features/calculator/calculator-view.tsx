import { useState } from "react";
import Box from "@mui/material/Box";

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
    <Box display="flex" height="100vh">
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <CalculatorForm onSubmit={handleCalculate} />
      </Box>

      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <CalculatorResults projection={projection} />
      </Box>
    </Box>
  );
};
