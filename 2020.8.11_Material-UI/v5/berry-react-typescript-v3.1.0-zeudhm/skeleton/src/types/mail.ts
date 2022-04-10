export interface MailProps {
    id: string;
    subject: string;
    isRead: boolean;
    important: boolean;
    starred: boolean;
    time: Date;
    promotions: boolean;
    forums: boolean;
    attach: boolean;
    sent: boolean;
    draft: boolean;
    spam: boolean;
    trash: boolean;
    profile: {
        avatar: string;
        name: string;
        email: string;
        to: string;
    };
    sender: {
        avatar: string;
        name: string;
        email: string;
        to: string;
        about: string;
    };
    message: string;
    attachments: {
        id: string;
        image: string;
        title: string;
    }[];
}

export type MailBoxCount = {
    all: number;
    inbox: number;
    sent: number;
    trash: number;
    starred: number;
    draft: number;
    important: number;
    promotions: number;
    spam: number;
    forums: number;
};

export interface MailDrawerProps {
    filter: string;
    handleFilter: (s: string) => void;
    handleDrawerOpen: MailListHeaderProps['handleDrawerOpen'];
    openMailSidebar: boolean | undefined;
    unreadCounts: MailBoxCount | undefined;
}

export interface MailDetailsProps {
    handleUserDetails: (e: React.MouseEvent<HTMLButtonElement> | undefined, v: MailProps | null) => void;
    data: MailProps | null;
    handleStarredChange: (e: React.ChangeEvent<HTMLInputElement>, d: MailProps | null) => void;
    handleImportantChange: (e: React.ChangeEvent<HTMLInputElement>, d: MailProps | null) => void;
}

export interface MailListProps {
    data: MailProps[];
    search: MailListHeaderProps['search'];
    handleSearch: MailListHeaderProps['handleSearch'];
    handleDrawerOpen: MailListHeaderProps['handleDrawerOpen'];
    handleUserDetails: (e: React.SyntheticEvent, m: MailProps) => void;
    handleStarredChange: (e: React.ChangeEvent<HTMLInputElement>, m: MailProps) => void;
    handleImportantChange: (e: React.ChangeEvent<HTMLInputElement>, m: MailProps) => void;
}

export interface MailListHeaderProps {
    search: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    length: number;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => void;
    handleDrawerOpen: () => void;
    handleDenseTable: () => void;
}

export interface MailStateProps {
    mails: MailProps[];
    error: object | string | null;
    unreadCount: MailBoxCount | undefined;
}
