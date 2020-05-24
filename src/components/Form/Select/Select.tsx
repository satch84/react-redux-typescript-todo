import { Select as MuiSelect } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from '../../../models';
import { FormControlStyled, MenuItemStyled } from './Select.style';

export interface SelectProps {
    value: string;
    options: SelectOptions[];
    onChange: (event: React.ChangeEvent<{ value: string }>) => void;
}

export const Select: React.FC<SelectProps> = ({ onChange, options, value }) => {
    const { t } = useTranslation();

    return (
        <FormControlStyled>
            <MuiSelect
                data-testid="select-helper"
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <MenuItemStyled value={option.value} key={index}>
                        {t(option.label)}
                    </MenuItemStyled>
                ))}
            </MuiSelect>
        </FormControlStyled>
    );
};
