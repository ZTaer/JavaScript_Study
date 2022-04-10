// material-ui
import { Avatar, Badge } from '@mui/material';

// project imports
import AvatarStatus from './AvatarStatus';
import { UserProfile } from 'types/user-profile';

// assets
const avatarImage = require.context('assets/images/users', true);

// ==============================|| CHAT USER AVATAR WITH STATUS ICON ||============================== //

interface UserAvatarProps {
    user: UserProfile;
}

const UserAvatar = ({ user }: UserAvatarProps) => (
    <Badge
        overlap="circular"
        badgeContent={<AvatarStatus status={user.online_status!} />}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
    >
        <Avatar alt={user.name} src={user.avatar && avatarImage(`./${user.avatar}`).default} />
    </Badge>
);

export default UserAvatar;
