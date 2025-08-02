import { Box, TextField, Button, Typography, Stack } from "@mui/material";

export const CalculatorForm = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Retirement Calculator
      </Typography>

      <Stack spacing={2}>
        <TextField label="Current Age" type="number" required />
        <TextField label="Retirement Age" type="number" required />
        <TextField label="Current Savings" type="number" required />
        <TextField label="Monthly Contribution" type="number" required />
        <TextField
          label="Expected Annual Return"
          type="number"
          slotProps={{
            input: {
              endAdornment: <span>%</span>,
            },
          }}
          required
        />
        <Button variant="contained">Calculate</Button>
      </Stack>
    </Box>
  );
};
