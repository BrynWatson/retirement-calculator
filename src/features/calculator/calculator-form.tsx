import { Box, Button, Typography, Stack } from "@mui/material";
import { Field, Form } from "../../components/hook-form";
import { useForm } from "react-hook-form";

export const CalculatorForm = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {});
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Retirement Calculator
      </Typography>
      <Form methods={methods} onSubmit={onSubmit}>
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
          <Button variant="contained">Calculate</Button>
        </Stack>
      </Form>
    </Box>
  );
};
