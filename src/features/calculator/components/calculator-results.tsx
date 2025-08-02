import { Box, Typography, Paper } from "@mui/material";

type CalculatorResultsProps = {
  result: number | null;
};

export const CalculatorResults = ({ result }: CalculatorResultsProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #f0f4ff, #e0f7fa)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          minWidth: 300,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight={500}>
          Projected Savings
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          fontWeight={600}
          sx={{ wordBreak: "break-word" }}
        >
          {new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR",
            minimumFractionDigits: 2,
          }).format(result || 0)}
        </Typography>
      </Paper>
    </Box>
  );
};
