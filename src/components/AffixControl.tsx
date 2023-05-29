import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { BiArrowToTop } from "react-icons/bi";

const AffixControl = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            size="lg"
            color="lime"
            variant="filled"
            radius="xl"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <BiArrowToTop size={20} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default AffixControl;
