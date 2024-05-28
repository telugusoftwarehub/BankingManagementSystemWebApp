import ErrorPage from "../pages/error-page";
import LoginPage from '../pages/login-page';
import DashboardPage from '../pages/dashboard-page';
import AccountManagement from '../pages/account_management';
import CustomerRelationshipManagement from "../pages/customer_relationship_management";
import LoanManagement from "../pages/loan_management";
import TransactionProcessing from "../pages/transaction_processing";
import ReportAnalytics from "../pages/reports&analytics";

export const routes = [{
        path: "/error",
        compontent: ErrorPage
    },{
        path: "/",
        compontent: LoginPage
    },{
        path: "/dashboard",
        compontent: DashboardPage
    },{
        path: "/accountManagement",
        compontent: AccountManagement
    },{
        path: "/customerRelationshipManagement",
        compontent: CustomerRelationshipManagement
    },{
        path: "/loanManagement",
        compontent: LoanManagement
    },{
        path: "/transactionProcessing",
        compontent: TransactionProcessing
    }, {
        path: "/reports&Analytics",
        compontent: ReportAnalytics
    }

]