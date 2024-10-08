import React from 'react';
import {
    StyledTable,
    TableRow,
    TableHeader,
    TableData,
    IconButton,
    CardTitle
} from '../styles/GlobalStyles.styles';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const DynamicTable = ({ title, headers, data, onEdit, onDelete }) => {
    return (
        <>
            <CardTitle>{title}</CardTitle>
            <StyledTable>
                <thead>
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableHeader key={index}>{header}</TableHeader>
                        ))}
                        <TableHeader>Actions</TableHeader> {/* Static header for actions */}
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} isEven={rowIndex % 2 === 0}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <TableData key={cellIndex}>{cell}</TableData>
                            ))}
                            <TableData>
                                <IconButton onClick={() => onEdit(rowIndex)}>
                                    <FaEdit />
                                </IconButton>
                                <IconButton onClick={() => onDelete(rowIndex)}>
                                    <FaTrashAlt />
                                </IconButton>
                            </TableData>
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </>
    );
};

export default DynamicTable;

