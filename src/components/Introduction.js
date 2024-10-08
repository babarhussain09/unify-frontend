import React from 'react';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardHeading,
    CardContent
} from '../styles/GlobalStyles.styles';

const Introduction = ({ title, subtitle, sections }) => {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            {sections.map((section, index) => (
                <div key={index}>
                    <CardHeading>{section.heading}</CardHeading>
                    <CardContent>{section.content}</CardContent>
                </div>
            ))}
        </Card>
    );
};

export default Introduction;
