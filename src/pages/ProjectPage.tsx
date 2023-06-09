import { FC, useRef, useState } from "react";
import { IProject, IProjectPage } from "../interfaces/IProjectPage";
import { ProjectPageContainer } from "../styles/pages/ProjectPage";
import { Center, Grid, SegmentedControl, Text, Box } from "@mantine/core";
import { BiArchiveIn, BiGrid } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { container } from "../animations";
import ProjectCard from "../components/ProjectCard";
import { projects, projectsArchive } from "../data/data";

const ProjectPage: FC<IProjectPage> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedSegment, setSelectedSegment] = useState("projects");
  return (
    <ProjectPageContainer id={id}>
      <Text size={32} weight={700}>
        Projects
      </Text>
      <Box sx={{ marginBottom: 30 }}>
        <SegmentedControl
          ref={ref}
          radius="md"
          value={selectedSegment}
          onChange={(e) => setSelectedSegment(e)}
          transitionTimingFunction="linear"
          color="cyan"
          mt={50}
          data={[
            {
              value: "projects",
              label: (
                <Center>
                  <BiGrid />
                  <Box ml={10}>Projects</Box>
                </Center>
              ),
            },
            {
              value: "archive",
              label: (
                <Center>
                  <BiArchiveIn />
                  <Box ml={10}>Projects Archive</Box>
                </Center>
              ),
            },
          ]}
        />
      </Box>
      {selectedSegment === "projects" ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid gutter={60}>
            {(projects || []).map((project: IProject) => {
              return (
                <ProjectCard
                  id={project?.id.toString()}
                  type="project"
                  repo={project.repo}
                  tags={project.tags}
                  demo={project.demo}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                />
              );
            })}
          </Grid>
        </motion.div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {(projectsArchive || []).map((archived: IProject) => {
            return (
              <ProjectCard
                id={archived?.id.toString()}
                type="archive"
                repo={archived.repo}
                tags={archived.tags}
                demo={archived.demo}
                image={archived.image}
                name={archived.name}
                description={archived.description}
                technologies={archived.technologies}
              />
            );
          })}
        </motion.div>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;
