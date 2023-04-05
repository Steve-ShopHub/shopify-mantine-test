import { useState } from 'react';
import {
  AppShell,
  Navbar,
  NavLink,
  Box,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  rem,
  createStyles,

} from '@mantine/core';

import MainLinks from './MainLinks'

import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';



const useStyles = createStyles((theme) => ({
  navLinkParent: {
    childrenOffset: '28'

  },
  navIcon: {
    size:'1rem',
    stroke: '1.5'
  }



}))



export default function AdminShell({children, showAside}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const {classes} = useStyles();


  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      
      navbar={
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      
      <Navbar.Section style={{display: "flex"}}>ShopHub Dashboard
        
      </Navbar.Section>
      
      <Navbar.Section grow mt="md">
        
        <MainLinks />

      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      <ColorSchemeToggle />
    </Navbar>
      }
      aside={
        !showAside === true ? null : (
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="md" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        )
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
