import { Box, Button, Typography, Stack } from "@mui/material";
import { Field, Form } from "../../../components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculatorSchema } from "../validations/validations";
import * as yup from "yup";

export type FormInputs = yup.InferType<typeof calculatorSchema>;

type CalculatorProps = {
  onSubmit: (data: FormInputs) => void;
};

export const CalculatorForm = ({ onSubmit }: CalculatorProps) => {
  const methods = useForm({ resolver: yupResolver(calculatorSchema) });

  const { handleSubmit } = methods;

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{mb: 2}}>
        Retirement Calculator
      </Typography>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Field.Text name="currentAge" label="Current Age" type="number" />

          <Field.Text
            name="retirementAge"
            label="Retirement Age"
            type="number"
          />

          <Field.Text
            name="currentSavings"
            label="Current Savings"
            type="number"
          />

          <Field.Text
            name="monthlyContribution"
            label="Monthly Contribution"
            type="number"
          />

          <Field.Text
            name="annualInterestRate"
            label="Expected Annual Return (%)"
            type="number"
          />
          <Button type="submit" variant="contained">
            Calculate
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};
