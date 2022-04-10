import { UserProfile } from 'types/user-profile';

export interface ContactStateProps {
    contacts: UserProfile[];
    error: object | string | null;
}
