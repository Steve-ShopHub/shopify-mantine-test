import {
    AppShell,
    Navbar,
    NavLink,
    createStyles,
    getStylesRef,
    rem,
    ThemeIcon
 
  } from '@mantine/core';

import { IconHome2, IconStar, IconMail, IconChartGridDots, IconPalette, IconBrush, IconArrowsLeftRight, IconRubberStamp, IconGift } from '@tabler/icons-react';
import { LinkItem } from './LinkItem';




export default function MainLinks() {


    return (

    
    <div>
        

        
        <LinkItem
         
        label="Home" 
        icon={<IconHome2 size="1rem" stroke={1.5} />}
        link="/" />
            
        <NavLink 
        label="Loyalty Program" 
        icon={<ThemeIcon  variant="light">{<IconStar size="1rem" stroke={1.5} />} </ThemeIcon>}
           
        
        childrenOffset={28}
        >
            

            <LinkItem label="Ways to earn" 
            icon={<IconRubberStamp size="1rem" 
            stroke={1.5} />} 
            link="/loyalty-program/ways-to-earn" />

            <LinkItem 
            label="Rewards" 
            icon={<IconGift size="1rem" stroke={1.5} />} 
            link="/loyalty-program/rewards"/>

        </NavLink>
        
        <NavLink 
        label="Appearance" 
        icon={<ThemeIcon  variant="light">{<IconPalette size="1rem" stroke={1.5} />} </ThemeIcon>}
        childrenOffset={28}>
            
            <LinkItem 
            label="Branding" 
            link="/branding" 
            icon={<IconBrush size="1rem" stroke={1.5} />}/>

            <LinkItem 
            label="Placement" 
            link="/placement" 
            icon={<IconArrowsLeftRight size="1rem" stroke={1.5} />} />

            <LinkItem 
            label="Emails" 
            link="/emails" 
            icon={<IconMail size="1rem" stroke={1.5} />} />

        </NavLink>
        

    </div>

    )

}
        