import React, { FunctionComponent, ReactElement } from 'react';

// material-ui
import { Theme } from '@mui/material/styles';
import { SvgIconTypeMap, SnackbarOrigin, ChipProps, TableCellProps } from '@mui/material';

import { OverridableComponent } from '@mui/material/OverridableComponent';

// project imports
import { TablerIcon } from '@tabler/icons';
import { CartStateProps } from './cart';
import { KanbanStateProps } from './kanban';
import { CustomerStateProps } from './customer';
import { ContactStateProps } from './contact';
import { ProductStateProps } from './e-commerce';
import { ChatStateProps } from './chat';
import { CalendarStateProps } from './calendar';
import { MailStateProps } from './mail';
import { UserStateProps } from './user';

import { SnackbarProps } from './snackbar';

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

export type ArrangementOrder = 'asc' | 'desc' | undefined;

export type DateRange = { start: number | Date; end: number | Date };

export type GetComparator = (o: ArrangementOrder, o1: string) => (a: KeyedObject, b: KeyedObject) => number;

export type Direction = 'up' | 'down' | 'right' | 'left';

export interface TabsProps {
    children?: React.ReactElement | React.ReactNode | string;
    value: string | number;
    index: number;
}

export interface GenericCardProps {
    title?: string;
    primary?: string | number | undefined;
    secondary?: string;
    content?: string;
    image?: string;
    dateTime?: string;
    iconPrimary?: OverrideIcon;
    color?: string;
    size?: string;
}

export type OverrideIcon =
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
          muiName: string;
      })
    | React.ComponentClass<any>
    | FunctionComponent<any>
    | TablerIcon;

export interface EnhancedTableHeadProps extends TableCellProps {
    onSelectAllClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    order: ArrangementOrder;
    orderBy?: string;
    numSelected: number;
    rowCount: number;
    onRequestSort: (e: React.SyntheticEvent, p: string) => void;
}

export interface EnhancedTableToolbarProps {
    numSelected: number;
}

export type HeadCell = {
    id: string;
    numeric: boolean;
    label: string;
    disablePadding?: string | boolean | undefined;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type NavItemTypeObject = { children?: NavItemType[]; items?: NavItemType[]; type?: string };

export type NavItemType = {
    id?: string;
    icon?: GenericCardProps['iconPrimary'];
    target?: boolean;
    external?: string;
    url?: string | undefined;
    type?: string;
    title?: React.ReactNode | string;
    color?: 'primary' | 'secondary' | 'default' | undefined;
    caption?: React.ReactNode | string;
    breadcrumbs?: boolean;
    disabled?: boolean;
    chip?: ChipProps;
};

export type AuthSliderProps = {
    title: string;
    description: string;
};

export interface ColorPaletteProps {
    color: string;
    label: string;
    value: string;
}

export interface DefaultRootStateProps {
    snackbar: SnackbarProps;
    cart: CartStateProps;
    kanban: KanbanStateProps;
    customer: CustomerStateProps;
    contact: ContactStateProps;
    product: ProductStateProps;
    chat: ChatStateProps;
    calendar: CalendarStateProps;
    mail: MailStateProps;
    user: UserStateProps;
}

export interface ColorProps {
    readonly [key: string]: string;
}

export type GuardProps = {
    children: ReactElement | null;
};

export interface StringColorProps {
    id?: string;
    label?: string;
    color?: string;
    primary?: string;
    secondary?: string;
}

export interface FormInputProps {
    bug: KeyedObject;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | undefined;
    label: string;
    name: string;
    required?: boolean;
    InputProps?: {
        label: string;
        startAdornment?: React.ReactNode;
    };
}

/** ---- Common Functions types ---- */

export type StringBoolFunc = (s: string) => boolean;
export type StringNumFunc = (s: string) => number;
export type NumbColorFunc = (n: number) => StringColorProps | undefined;
export type ChangeEventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

// amit

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};
