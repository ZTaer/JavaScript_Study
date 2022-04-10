import { useEffect, useState, ReactElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionItem = {
    id: string;
    title: ReactElement | string;
    content: ReactElement | string;
    disabled?: boolean;
    expanded?: boolean;
    defaultExpand?: boolean | undefined;
};

interface accordionProps {
    data: AccordionItem[];
    defaultExpandedId?: string | boolean | null;
    expandIcon?: ReactElement;
    square?: boolean;
    toggle?: boolean;
}

// ==============================|| ACCORDION ||============================== //

const Accordion = ({ data, defaultExpandedId = null, expandIcon, square, toggle }: accordionProps) => {
    const theme = useTheme();

    const [expanded, setExpanded] = useState<string | boolean | null>(null);
    const handleChange = (panel: string) => (event: React.SyntheticEvent<Element, Event>, newExpanded: boolean) => {
        toggle && setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        setExpanded(defaultExpandedId);
    }, [defaultExpandedId]);

    return (
        <Box sx={{ width: '100%' }}>
            {data &&
                data.map((item: AccordionItem) => (
                    <MuiAccordion
                        key={item.id}
                        defaultExpanded={!item.disabled && item.defaultExpand}
                        expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
                        disabled={item.disabled}
                        square={square}
                        onChange={handleChange(item.id)}
                    >
                        <MuiAccordionSummary
                            expandIcon={expandIcon || expandIcon === false ? expandIcon : <ExpandMoreIcon />}
                            sx={{ color: theme.palette.mode === 'dark' ? 'grey.500' : 'grey.800', fontWeight: 500 }}
                        >
                            {item.title}
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>{item.content}</MuiAccordionDetails>
                    </MuiAccordion>
                ))}
        </Box>
    );
};

export default Accordion;
