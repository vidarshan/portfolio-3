import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { BiArrowToTop } from "react-icons/bi";
import { AppDispatch, useAppSelector } from "../store/store";
import { setOverScroll } from "../store/slices/scrollSlice";
import { useDispatch } from "react-redux";

const AffixControl = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { scrolled } = useAppSelector((state) => state.overScroll);

  const [scroll, scrollTo] = useWindowScroll();

  if (scroll?.y === 0) {
    dispatch(setOverScroll(false));
  } else if (!scrolled && scroll?.y > 0) {
    dispatch(setOverScroll(true));
  }

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            size="md"
            color="blue"
            variant="light"
            radius="md"
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
