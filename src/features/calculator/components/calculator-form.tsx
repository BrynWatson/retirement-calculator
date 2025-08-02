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
  const methods = useForm<FormInputs>({
    resolver: yupResolver(calculatorSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = methods;

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Retirement Calculator
      </Typography>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Field.Text
            name="currentAge"
            label="Enter your current age in years."
            type="number"
            placeholder="e.g 40"
            slotProps={{
              htmlInput: { autoComplete: "off" },
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <Field.Text
            name="retirementAge"
            label="At what age do you plan to retire?"
            type="number"
            placeholder="e.g 65"
            slotProps={{
              htmlInput: { autoComplete: "off" },
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <Field.Text
            name="currentSavings"
            label="Total amount you’ve saved for retirement so far (in Rands)."
            type="number"
            placeholder="e.g R20000"
            slotProps={{
              htmlInput: { autoComplete: "off" },
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: <span style={{ marginRight: 4 }}>R</span>,
              },
            }}
          />

          <Field.Text
            name="monthlyContribution"
            label="How much you contribute to retirement each month."
            type="number"
            placeholder="e.g 3000"
            slotProps={{
              htmlInput: { autoComplete: "off" },
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: <span style={{ marginRight: 4 }}>R</span>,
              },
            }}
          />

          <Field.Text
            name="annualInterestRate"
            label="Expected annual investment return."
            type="number"
            placeholder="e.g 2"
            slotProps={{
              htmlInput: { autoComplete: "off" },
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: <span style={{ marginRight: 4 }}>%</span>,
              },
            }}
          />

          <Button type="submit" variant="contained">
            Calculate
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};
