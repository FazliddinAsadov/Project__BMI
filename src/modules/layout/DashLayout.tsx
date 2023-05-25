import {
  AppShell,
  Box,
  Burger,
  Center,
  Group,
  Header,
  Navbar,
  SegmentedControl,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAppsFilled,
  IconBrandSlack,
  IconMicroscope,
  IconMovie,
} from "@tabler/icons-react";
import AccordionItem from "@web/components/AccordionItem";
import locale from "@web/translate/locale";
import { useRouter } from "next/router";
import { useState } from "react";
import dashLayoutLocale from "./locale";
import useDashStyle from "./style/useDashStyle";

const activeStyle = {
  background: "#1864AB",
  color: "white",
};

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [activeId, setActiveId] = useState(null);
  const router = useRouter();
  const { classes, cx } = useDashStyle();
  const [fullView, setToggleFullView] = useState(false);
  const [section, setSection] = useState<
    "maruza" | "amaliy" | "tajriba" | "video"
  >();
  const [active, setActive] = useState("Billing");
  const toogleFullView = () => {
    setToggleFullView(!fullView);
  };
  const SegmentControlItem: React.FC<any> = ({
    amaliyLink,
    tajribaLink,
    videoLink,
    maruzaLink,
  }) => {
    return (
      <>
        <SegmentedControl
          color="orange"
          value={section}
          onChange={(value: "maruza" | "amaliy" | "tajriba" | "video") =>
            setSection(value)
          }
          transitionTimingFunction="ease"
          fullWidth
          data={[
            {
              label: (
                <Center>
                  <IconBrandSlack size="1rem" />
                  <Box
                    ml={10}
                    onClick={() => {
                      router.push(`/${maruzaLink}`), toogleFullView();
                    }}
                  >
                    {dashLayoutLocale.maruza}
                  </Box>
                </Center>
              ),
              value: "ma'ruza",
            },
            {
              label: (
                <Center>
                  <IconAppsFilled size="1rem" />
                  <Box
                    ml={10}
                    onClick={() => {
                      router.push(`/${amaliyLink}`), toogleFullView();
                    }}
                  >
                    {dashLayoutLocale.amaliy}
                  </Box>
                </Center>
              ),
              value: "amaliy",
            },
            {
              label: (
                <Center>
                  <IconMicroscope size="1rem" />
                  <Box
                    ml={10}
                    onClick={() => {
                      router.push(`/${tajribaLink}`), toogleFullView();
                    }}
                  >
                    {dashLayoutLocale.tajriba}
                  </Box>
                </Center>
              ),
              value: "tajriba",
            },
            {
              label: (
                <Center>
                  <IconMovie size="1rem" />
                  <Box
                    ml={10}
                    onClick={() => {
                      router.push(`/${videoLink}`), toogleFullView();
                    }}
                  >
                    {dashLayoutLocale.video}
                  </Box>
                </Center>
              ),
              value: "video",
            },
          ]}
        />
      </>
    );
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="xs"
      asideOffsetBreakpoint="xs"
      navbar={
        fullView ? (
          <Navbar
            // hiddenBreakpoint="sm"
            width={{
              sm: !fullView ? 430 : "max-content",
              md: !fullView ? 430 : "max-content",
              lg: !fullView ? 430 : "max-content",
              xl: !fullView ? 430 : "max-content",
            }}
            sx={{
              // position: fullView ? "static" : "fixed",
              zIndex: 999,
            }}
            p={!fullView ? "md" : 0}
          >
            {/* {fullView && (
              <Text className={classes.link}>
                <Burger
                  size={"sm"}
                  opened={fullView}
                  onClick={toogleFullView}
                />
              </Text>
            )} */}
            <Group>
              <Text className={classes.bob} pl={20}>
                {dashLayoutLocale.bob}
              </Text>
            </Group>
            <AccordionItem SegmentControlItem={SegmentControlItem} />
            <Group
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/quiz");
                toogleFullView();
              }}
            >
              <Text pl={20}>{dashLayoutLocale.quiz}</Text>
            </Group>
          </Navbar>
        ) : (
          <></>
        )
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div className={classes.head__div}>
            <Burger
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
              opened={fullView}
              onClick={toogleFullView}
            />
            <Box className={classes.head}>
              <Text onClick={() => router.push("/")} className={classes.title}>
                {locale.bmi}
              </Text>
              {/* <ToggleTheme /> */}
            </Box>
          </div>
        </Header>
      }
    >
      <Box mx={10}>{children}</Box>
    </AppShell>
  );
}
