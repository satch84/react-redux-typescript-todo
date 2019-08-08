import { TextField as MuiTextField } from '@material-ui/core';
import * as React from 'react';

interface TextfieldProp {
    hasError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    label?: string;
    value?: string;
    onChange?: (arg: any) => void;
}

const Textfield: React.FC<TextfieldProp> = ({ hasError, isDisabled, isRequired, label, value, onChange }) => (
    <MuiTextField variant='outlined' value={value} required={isRequired} label={label} onChange={onChange} disabled={isDisabled} error={hasError} />
);

export { Textfield };
