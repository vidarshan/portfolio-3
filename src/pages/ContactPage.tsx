import React, { FC } from "react";
import { IContactPage } from "../interfaces/IContactPage";
import { ContactPageContainer } from "../styles/pages/ContactPage";
import { useForm } from "@mantine/form";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { MdOutlineClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { notifications } from "@mantine/notifications";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";

const ContactPage: FC<IContactPage> = ({ id }) => {
  const form = useForm({
    initialValues: {
      email: "v@gmail.com",
      message: "Some Test Message",
      termsOfService: false,
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email address",
      message: (value) =>
        value?.trim()?.length >= 5 ? null : "Enter a valid message",
    },
  });

  const clearForm = () => {
    form.reset();
  };

  const sendEmail = async (values: any) => {
    const { email, message } = values;
    var formInfo = {
      email,
      message,
    };

    try {
      notifications.show({
        id: "load-data",
        loading: true,
        title: "Sending...",
        message: "Sending message to the inbox",
        autoClose: 20000,
        radius: "md",
        withCloseButton: false,
        withBorder: true,
        styles: () => ({
          title: { fontWeight: 700 },
          description: { fontWeight: 600 },
        }),
      });

      const emailres = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE as string,
        formInfo as any,
        process.env.REACT_APP_EMAILJS_USER as string
      );

      if (emailres && emailres.status === 200) {
        notifications.update({
          id: "load-data",
          color: "teal",
          title: "Sent!",
          message: "Sent your message to the inbox",
          icon: <IoMdCheckmark size="1rem" />,
          autoClose: 2000,
          withCloseButton: false,
          withBorder: true,
          radius: "md",
          styles: () => ({
            title: { fontWeight: 700 },
            description: { fontWeight: 600 },
          }),
        });
      }
    } catch (exception) {
      notifications.update({
        id: "load-data",
        color: "red",
        title: "Oops!",
        message: "Failed. Please try again.",
        icon: <IoMdClose size="1rem" />,
        autoClose: 2000,
        withCloseButton: false,
        withBorder: true,
        radius: "md",
        styles: () => ({
          title: { fontWeight: 700 },
          description: { fontWeight: 600 },
        }),
      });
    }
    form.reset();
  };

  return (
    <ContactPageContainer id={id}>
      <Flex sx={{ width: "100%" }} direction="column" justify="center">
        <Box id="reachOutSection">
          <Text mb={40} size={32} weight={700}>
            Reach Out
          </Text>
          <Card radius="lg" shadow="md" withBorder>
            <form onSubmit={form.onSubmit((values) => sendEmail(values))}>
              <Text sx={{ marginBottom: 30 }} size="sm" weight={700}>
                Send me a message
              </Text>
              <TextInput
                radius="md"
                label="Your Email"
                placeholder="Email address"
                {...form.getInputProps("email")}
                withAsterisk
              />
              <Textarea
                mt={20}
                radius="md"
                placeholder="Your message"
                label="Your message"
                {...form.getInputProps("message")}
                withAsterisk
              />
              <Flex direction="row" justify="flex-end" mt={20}>
                <Group>
                  <ActionIcon
                    size="lg"
                    radius="md"
                    color="gray"
                    variant="light"
                    onClick={() => clearForm()}
                  >
                    <MdOutlineClose />
                  </ActionIcon>
                  <Button
                    size="sm"
                    radius="md"
                    color="cyan"
                    leftIcon={<IoSend />}
                    variant="light"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Group>
              </Flex>
            </form>
          </Card>
        </Box>
      </Flex>
    </ContactPageContainer>
  );
};

export default ContactPage;
