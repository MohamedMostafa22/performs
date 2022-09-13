import { Link, Typography } from "@mui/material";

export default function NavigationLink({ name, onClick, isLast }) {
  return isLast ? (
    <Typography
      key={name}
      color="text.primary"
      sx={{
        fontSize: 15,
      }}
    >
      {name}
    </Typography>
  ) : (
    <Link
      underline="hover"
      key={name}
      color="inherit"
      onClick={onClick}
      sx={{
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      {name}
    </Link>
  );
}
