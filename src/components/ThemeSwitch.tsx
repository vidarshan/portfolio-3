import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      size="md"
      radius="sm"
      color="orange"
      variant="light"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? (
        <BiMoon color="#f3a617" />
      ) : (
        <BiSun color="#f36017" />
      )}
    </ActionIcon>
  );
};

export default ThemeSwitch;
