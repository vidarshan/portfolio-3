import { ColorScheme } from "@mantine/core";

export const changeTheme = (
  value: ColorScheme,
  setColorScheme: (arg0: any) => void,
  colorScheme: string
) => {
  setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
};
