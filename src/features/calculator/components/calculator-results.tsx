import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

type CalculatorResultsProps = {
  projection: { year: number; value: number }[] | null;
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
        <Typography variant="body1" color="text.secondary">
          Enter your details and calculate to see your retirement projection.
        </Typography>
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
      name: "Savings",
      data: projection.map((p) => p.value),
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
    </Box>
  );
};
