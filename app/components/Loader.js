"use client";
import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box>
      <CircularProgress style={{ color: "var(--greenish)" }} />
    </Box>
  );
}
