import { Button, NavLink, UnstyledButton, Group, ThemeIcon, Text } from '@mantine/core';
import { useRouter } from "next/router"

import Link from 'next/link';



export function LinkItem({ icon, color, label, link }) {
    return (
      <Link href={link}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
  
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
      </Link>
    );
  }


  export function ParentLinkItem({ icon, color, label, children }) {
    return (
      
      
        
      <div>
          <UnstyledButton
            sx={(theme) => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              },
            })}
          >
          
          
            <Group>
              <ThemeIcon color={color} variant="light">
                {icon}
              </ThemeIcon>
              <Text size="sm">{label}</Text>
            </Group>
          
          </UnstyledButton>
          <NavLink label={label} icon={icon} color={color}>
          {children}
          </NavLink>
      </div>
    );
  }