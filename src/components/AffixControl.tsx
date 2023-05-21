import {
  ActionIcon,
  Affix,
  Button,
  Text,
  Transition,
  rem,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { TbCircleArrowUpFilled } from "react-icons/tb";

const AffixControl = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            size="xl"
            color="lime"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <TbCircleArrowUpFilled size={80} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default AffixControl;
