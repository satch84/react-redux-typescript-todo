import { Select as MuiSelect } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from '../../../models';

export interface SelectProps {
    value: string;
    options: SelectOptions[];
    onChange: (event: React.ChangeEvent<{ value: string }>) => void;
}

export const Select: React.FC<SelectProps> = ({ onChange, options, value }) => {
    const { t } = useTranslation();

    return (
        <FormControl>
            <MuiSelect
                data-testid="select-helper"
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <MenuItem value={option.value} key={index}>
                        {t(option.label)}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};
