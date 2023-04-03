import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { LinkItem } from '../components/LinkItem';
import AdminShell from '../components/AdminShell';
import { Group, Button } from '@mantine/core';

export default function HomePage() {
  return (

      <AdminShell>
        <Welcome />
        <ColorSchemeToggle />
        <Group position="center">
          {/* <LinkItem label="Go to post page" link="./posts/first-post" />
          <LinkItem label="Emails" link="./emails" /> */}
        </Group>
      </AdminShell>

  );
}
