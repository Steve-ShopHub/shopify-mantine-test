import {
    AppShell,
    Navbar,
    NavLink,
    createStyles,
    getStylesRef,
    rem,
    ThemeIcon,
 
  } from '@mantine/core';

import { IconHome2, IconStar, IconMail, IconChartGridDots, IconPalette, IconBrush, IconArrowsLeftRight, IconRubberStamp, IconGift, IconManualGearbox, IconGraph, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import { LinkItem } from './LinkItem';
import { useState } from 'react';




export default function MainLinks() {

    const [loyaltyNavIsOpen, setLoyaltyNavIsOpen] = useState(false);
    const [appearanceNavIsOpen, setAppearanceNavIsOpen] = useState(false);

    return (

    
    <div>
        

        
        <LinkItem
         
        label="Home" 
        icon={<IconHome2 size="1rem" stroke={1.5} />}
        link="/" />
            
        <NavLink 
        label="Loyalty Program" 
        icon={<ThemeIcon 
            variant="light">{<IconStar size="1rem" stroke={1.5} />} 
            </ThemeIcon>}                  
        childrenOffset={28}
        opened={loyaltyNavIsOpen}
        onClick={() => {setLoyaltyNavIsOpen(!loyaltyNavIsOpen)}}
        >
            

            <Link href="/loyalty-program/ways-to-earn"><NavLink label="Ways to earn" 
            icon={<IconRubberStamp size="1rem" 
            stroke={1.5} />} 
            link="/loyalty-program/ways-to-earn"
            />
            </Link>

            <Link href="/loyalty-program/rewards"><NavLink 
            label="Rewards" 
            icon={<IconGift size="1rem" stroke={1.5} />} 
            link="/loyalty-program/rewards"
            /></Link>

        </NavLink>
        
        <NavLink 
        label="Appearance" 
        icon={<ThemeIcon  variant="light">{<IconPalette size="1rem" stroke={1.5} />} </ThemeIcon>}
        childrenOffset={28}
        opened={appearanceNavIsOpen}
        onClick={() => {setAppearanceNavIsOpen(!appearanceNavIsOpen)}}
        >
            
            <Link href="/appearance/branding">
                <NavLink
                label="Branding"
                link="/appearance/branding"
                icon={<IconBrush size="1rem" stroke={1.5} />}/>
            </Link>

            <Link href="/appearance/placement">
                <NavLink
                label="Placement"
                link="/placement"
                icon={<IconArrowsLeftRight size="1rem" stroke={1.5} />} />
            </Link>

            <Link href="/appearance/emails">
                <NavLink
                label="Emails"
                link="/emails"
                icon={<IconMail size="1rem" stroke={1.5} />} />
            </Link>

        </NavLink>
        
        <LinkItem 
            label="Analytics" 
            link="/analytics/analytics" 
            icon={<IconGraph size="1rem" stroke={1.5} />} />

        <LinkItem 
            label="Settings" 
            link="/settings" 
            icon={<IconSettings size="1rem" stroke={1.5} />} />

    </div>

    )

}
        