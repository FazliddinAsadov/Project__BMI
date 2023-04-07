import {
  AppShell,
  Box,
  Burger,
  Header,
  Navbar,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import dataPages from "./dataPages";
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
  const theme = useMantineTheme();
  const [activeId, setActiveId] = useState(null);
  const router = useRouter();
  const { classes, cx } = useDashStyle();
  const [fullView, toggleFullView] = useToggle();

  const links = dataPages.map((item: any) => {
    return (
      <Tooltip label={item.label} position="left" withArrow key={item.label}>
        <Link
          href={item.link}
          style={item.id === activeId ? activeStyle : {}}
          onClick={() => setActiveId(item.id)}
          className={cx(classes.link, {
            linkActive: item.link === router.pathname,
          })}
        >
          <item.icon
            className={cx(classes.linkIcon, {
              iconFull: !fullView,
            })}
            stroke={1.5}
          />
          {!fullView ? <Text>{item.label}</Text> : null}
        </Link>
      </Tooltip>
    );
  });
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
        <Navbar
          hiddenBreakpoint="sm"
          width={{
            sm: !fullView ? 250 : "min-content",
            lg: !fullView ? 300 : "min-content",
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
          {links}
        </Navbar>
      }
      header={
        !fullView ? (
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
        ) : (
          <></>
        )
      }
    >
      <Box mx={10}>{children}</Box>
    </AppShell>
  );
}
