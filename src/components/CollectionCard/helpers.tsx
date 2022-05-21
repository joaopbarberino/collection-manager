import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export const renderIcon = (counterName: string, counterQtd: number, totalVolumes: number) => {
    let icon: React.ReactElement;

    if (counterQtd === 0) {
        icon = <CloseIcon />;

    } else if (counterQtd === totalVolumes) {
        icon = counterName === 'have' ? <DoneIcon className='done' /> : <DoneAllIcon className='done' />;

    } else {
        icon = counterName === 'have' ? <LibraryBooksIcon /> : <TrendingUpIcon />;
    }

    return icon;
}