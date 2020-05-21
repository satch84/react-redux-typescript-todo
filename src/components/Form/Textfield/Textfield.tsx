import { TextField as MuiTextField } from '@material-ui/core';
import React from 'react';

export interface TextfieldProps {
    hasError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    label?: string;
    value?: string;
    onChange?: (arg: any) => void;
    fullWidth: boolean;
}

export const Textfield: React.FC<TextfieldProps> = ({ hasError, fullWidth, isDisabled, isRequired, label, value, onChange }) => (
    <MuiTextField
        variant='outlined'
        fullWidth={fullWidth}
        value={value}
        required={isRequired}
        label={label}
        onChange={onChange}
        disabled={isDisabled}
        error={hasError}
    />
);
