import React from 'react';
import {
    SidebarContainer,
    NavItem,
    SectionHeading
} from '../styles/GlobalStyles.styles';

const Sidebar = ({ isOpen, toggleSidebar, sections }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            {/* Dynamic Sections */}
            {sections.map((section) => (
                <div key={section.title}>
                    {/* Conditionally render SectionHeading only if title is present */}
                    {section.title && <SectionHeading>{section.title}</SectionHeading>}
                    {section.items.map((item) => (
                        <NavItem
                            key={item.name}
                            to={item.route}
                            onClick={toggleSidebar}
                            activeClassName="active"
                        >
                            {item.name}
                        </NavItem>
                    ))}
                </div>
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;
