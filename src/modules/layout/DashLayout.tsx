import {
  Accordion,
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
import { useDisclosure, useToggle } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import dashLayoutLocale from "./locale";
import useDashStyle from "./style/useDashStyle";
import dataPages from "@web/services/api/dataPages";
import themaList from "@web/services/api/ThemaList";
import {
  IconUserCircle,
  IconAppsFilled,
  IconMicroscope,
  IconMovie,
  IconAddressBook,
} from "@tabler/icons-react";
import AccordionItem from "@web/components/AccordionItem";

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
  const [fullView, toggleFullView] = useToggle();
  const [section, setSection] = useState<"amaliy" | "tajriba" | "video">(
    "amaliy"
  );
  const [active, setActive] = useState("Billing");

  const links = dataPages[section].map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const SegmentControlItem = () => {
    return (
      <>
        <SegmentedControl
          color="orange"
          value={section}
          onChange={(value: "amaliy" | "tajriba") => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            {
              label: (
                <Center>
                  <IconAppsFilled size="1rem" />
                  <Box ml={10}>{dashLayoutLocale.amaliy}</Box>
                </Center>
              ),
              value: "amaliy",
            },
            {
              label: (
                <Center>
                  <IconMicroscope size="1rem" />
                  <Box ml={10}>{dashLayoutLocale.tajriba}</Box>
                </Center>
              ),
              value: "tajriba",
            },
            {
              label: (
                <Center>
                  <IconMovie size="1rem" />
                  <Box ml={10}>{dashLayoutLocale.video}</Box>
                </Center>
              ),
              value: "video",
            },
          ]}
        />
        <Navbar.Section grow mt="xl">
          {links}
        </Navbar.Section>
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
        !fullView ? (
          <Navbar
            // hiddenBreakpoint="sm"
            width={{
              sm: !fullView ? 250 : "min-content",
              md: !fullView ? 350 : "min-content",
              lg: !fullView ? 350 : "min-content",
              xl: !fullView ? 350 : "min-content",
            }}
            sx={{
              position: fullView ? "static" : "fixed",
              zIndex: 999,
            }}
            p={!fullView ? "md" : 0}
          >
            {fullView && (
              <Text className={classes.link}>
                <Burger
                  size={"sm"}
                  opened={!fullView}
                  onClick={() => toggleFullView()}
                />
              </Text>
            )}
            <Group>
              <Text className={classes.bob} pl={20}>
                {dashLayoutLocale.bob}
              </Text>
            </Group>
            <AccordionItem SegmentControlItem={SegmentControlItem} />
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
              opened={!fullView}
              onClick={() => toggleFullView()}
            />
            <Box className={classes.head}>
              <Text className={classes.title}>Name</Text>
              <IconUserCircle size={32} />
            </Box>
          </div>
        </Header>
      }
    >
      <Box mx={10}>{children}</Box>
    </AppShell>
  );
}
