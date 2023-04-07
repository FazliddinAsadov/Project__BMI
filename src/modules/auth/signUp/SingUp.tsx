import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandLinkedin, IconBrandGoogle } from "@tabler/icons-react";
import signUpLocale from "./locale";
import useSignUpStyle from "./style/useSignUpStyle";

const SignUp = () => {
  const { classes } = useSignUpStyle();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : signUpLocale.invalidEmail,
      password: (val) =>
        val.length <= 6 ? signUpLocale.invalidPassword : null,
    },
  });

  return (
    <Box>
      <Container size={500} my={40}>
        <Title align="center">{signUpLocale.title}</Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              <TextInput
                label={signUpLocale.name}
                placeholder={signUpLocale.placeholderName}
                {...form.getInputProps("name")}
                radius="md"
                required
              />
              <TextInput
                required
                label={signUpLocale.email}
                placeholder={signUpLocale.placeholderEmail}
                {...form.getInputProps("email")}
                error={form.errors.email && signUpLocale.invalidEmail}
                radius="md"
              />
              <PasswordInput
                required
                label={signUpLocale.password}
                placeholder={signUpLocale.placeholderPassword}
                {...form.getInputProps("password")}
                error={form.errors.password && signUpLocale.invalidPassword}
                radius="md"
              />

              <Checkbox
                label={signUpLocale.checkbox}
                {...form.getInputProps("terms")}
              />
              <Button type="submit" fullWidth mt="sm">
                {signUpLocale.signUp}
              </Button>
              <Group position="center" mt="sm">
                <Anchor
                  component="button"
                  type="button"
                  color="dimmed"
                  size="xs"
                >
                  {signUpLocale.already}
                </Anchor>
              </Group>
              <Box className={classes.line__or}>
                <Box className={classes.line}></Box>
                <Group position="center">{signUpLocale.or}</Group>
                <Box className={classes.line}></Box>
              </Box>

              <Group position="center" className={classes.icon__group__brand}>
                <ActionIcon>
                  <Box className={classes.btn__google}>
                    <IconBrandGoogle />
                    <Text>{signUpLocale.google}</Text>
                  </Box>
                </ActionIcon>
                <ActionIcon>
                  <Box className={classes.btn__linkedin}>
                    <IconBrandLinkedin />
                    <Text>{signUpLocale.linkedin}</Text>
                  </Box>
                </ActionIcon>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
