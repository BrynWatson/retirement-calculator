import { Box, Stack, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

type ProjectionYear = {
  year: number;
  value: number;
  adjustedValue: number;
};

type CalculatorResultsProps = {
  projection: ProjectionYear[] | null;
};


export const CalculatorResults = ({ projection }: CalculatorResultsProps) => {
  if (!projection) {
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mb: 2, fontFamily: "cursive", textAlign: "center" }}
          >
            Retirement Calculator
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter your details and calculate to see your retirement projection.
          </Typography>
        </Stack>
      </Box>
    );
  }
  const finalValue = projection[projection.length - 1].value;

  const formatZAR = (val: number) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0,
    }).format(val);

  const chartOptions = {
    chart: {
      id: "retirement-chart",
      toolbar: { show: false },
    },
    yaxis: {
      labels: {
        formatter: formatZAR,
      },
    },
    xaxis: {
      categories: projection.map((p) => p.year),
    },

    tooltip: {
      y: {
        formatter: formatZAR,
      },
    },
  };

  const series = [
    {
      name: "Nominal Savings",
      data: projection.map((p) => p.value),
    },
    {
      name: "Today's Value (Inflation-Adjusted)",
      data: projection.map((p) => p.adjustedValue),
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
    >
      <Typography variant="h6" gutterBottom>
        Projected Growth Over Time
      </Typography>

      <Box width="100%" maxWidth={600}>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="line"
          height={350}
        />
      </Box>

      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        mt={4}
        textAlign="center"
      >
        Total at Retirement: {formatZAR(finalValue)}
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        (~{formatZAR(projection[projection.length - 1].adjustedValue)} in
        today’s value)
      </Typography>
    </Box>
  );
};
