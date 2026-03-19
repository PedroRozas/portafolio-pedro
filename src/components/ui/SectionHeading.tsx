import { Stack, Typography } from "@mui/material";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  descriptionMaxWidth?: number | string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  descriptionMaxWidth = 680,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Stack
      spacing={2}
      alignItems={centered ? "center" : "flex-start"}
      textAlign={align}
    >
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontSize: "0.72rem" }}
      >
        {eyebrow}
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 800,
          fontSize: { xs: "2.4rem", md: "3.3rem" },
          lineHeight: 1.02,
          letterSpacing: "-0.05em",
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.05rem" },
            lineHeight: 1.7,
            maxWidth: descriptionMaxWidth,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
