// material-ui
import { Button, CardActions, CardContent, Divider, Grid } from '@mui/material';

// project imports
import ToDoList from './ToDoList';
import TrafficSources from './TrafficSources';
import TeamMembers from './TeamMembers';

import UserActivity from './UserActivity';
import LatestMessages from './LatestMessages';

import ProjectTable from './ProjectTable';
import ProductSales from './ProductSales';

import TasksCard from './TasksCard';
import ApplicationSales from './ApplicationSales';

import ActiveTickets from './ActiveTickets';
import LatestPosts from './LatestPosts';

import FeedsCard from './FeedsCard';
import LatestCustomers from './LatestCustomers';
import LatestOrder from './LatestOrder';

import IncomingRequests from './IncomingRequests';
import TotalRevenue from './TotalRevenue';
import NewCustomers from './NewCustomers';
import RecentTickets from './RecentTickets';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET DATA ||=========================== //

const WidgetData = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={4} md={6}>
            <ToDoList />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
            <TrafficSources />
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
            <TeamMembers />
        </Grid>

        <Grid item xs={12} md={7} lg={6}>
            <UserActivity />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
            <LatestMessages />
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
            <MainCard title="Projects" content={false}>
                <CardContent sx={{ p: 0 }}>
                    <ProjectTable />
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="text" size="small">
                        View all Projects
                    </Button>
                </CardActions>
            </MainCard>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
            <ProductSales />
        </Grid>

        <Grid item xs={12} md={4}>
            <TasksCard />
        </Grid>
        <Grid item xs={12} md={8}>
            <ApplicationSales />
        </Grid>

        <Grid item xs={12} md={8}>
            <ActiveTickets />
        </Grid>
        <Grid item xs={12} md={4}>
            <LatestPosts />
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
            <FeedsCard />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
            <LatestCustomers />
        </Grid>

        <Grid item xs={12}>
            <LatestOrder />
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
            <IncomingRequests />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
            <TotalRevenue />
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
            <NewCustomers />
        </Grid>

        <Grid item xs={12} md={12} lg={8}>
            <RecentTickets />
        </Grid>
    </Grid>
);

export default WidgetData;
