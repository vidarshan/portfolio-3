import { FC, useRef } from "react";
import { IWorkPage } from "../interfaces/IWorkPage";
import {
  WorkPageContainer,
  WorkMotionContainer,
} from "../styles/pages/WorkPage";
import { Text } from "@mantine/core";
import { container } from "../animations";
import { motion, useInView } from "framer-motion";
import WorkItem from "../components/WorkItem";
import { work } from "../data/work";

const WorkPage: FC<IWorkPage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <WorkPageContainer id={id}>
      <Text ref={ref} size={32} weight={700}>
        Work Experience
      </Text>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WorkMotionContainer>
          {(work || []).map((item, index) => {
            return (
              <WorkItem
                key={index?.toString()}
                index={index?.toString()}
                icon={item?.icon}
                title={item?.title}
                contribution={item?.contribution}
                company={item?.company}
                date={item?.date}
                link={item?.link}
                details={item?.details}
                competencies={item?.competencies}
              />
            );
          })}
        </WorkMotionContainer>
      </motion.div>
    </WorkPageContainer>
  );
};

export default WorkPage;
