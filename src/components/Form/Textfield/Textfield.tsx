import * as React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

interface TextfieldProp {
    hasError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    label?: string;
    value?: string;
    onChange?: (arg: any) => void;
}

const Textfield: React.FC<TextfieldProp> = props => (
    <MuiTextField variant='outlined' value={props.value} required={props.isRequired} label={props.label} onChange={props.onChange} disabled={props.isDisabled} error={props.hasError} />
);

export { Textfield };
