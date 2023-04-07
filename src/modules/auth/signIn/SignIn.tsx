import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  Stack,
} from "@mantine/core";
import useSignInStyle from "./style/useSignInStyle";
import loginLocale from "./locale";

const SignIn = () => {
  const { classes } = useSignInStyle();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : loginLocale.invalidEmail),
      password: (val) => (val.length <= 6 ? loginLocale.invalidPassword : null),
    },
  });

  return (
    <Box className={classes.head}>
      <Container size={420} my={40}>
        <Title align="center" className={classes.title}>
          {loginLocale.title}
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              <TextInput
                required
                label={loginLocale.email}
                placeholder={loginLocale.placeholderEmail}
                {...form.getInputProps("email")}
                error={form.errors.email && loginLocale.invalidEmail}
                radius="md"
              />
              <PasswordInput
                required
                label={loginLocale.password}
                placeholder={loginLocale.placeholderPassword}
                {...form.getInputProps("password")}
                error={form.errors.password && loginLocale.invalidPassword}
                radius="md"
              />
              <Group position="apart" mt="lg">
                <Checkbox label={loginLocale.remember} />
                <Anchor component="button" size="sm">
                  {loginLocale.forgetPassword}
                </Anchor>
              </Group>

              <Text color="dimmed" size="sm" align="center" mt={25}>
                {loginLocale.noAccount}
                <Anchor size="sm" component="button">
                  {loginLocale.newAccount}
                </Anchor>
              </Text>

              <Button type="submit" fullWidth mt="xl">
                {loginLocale.signIn}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
