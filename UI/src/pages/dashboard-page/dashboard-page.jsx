import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './dashboard-page.css'
const DashboardPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(location);
    }, []);

    const clickEventHandler = (path) => {
        switch (path) {
            case 'TP':
                navigate('/transactionProcessing');
                break
            case 'LM':
                navigate('/loanManagement');
                break
            case 'CRM':
                navigate('/customerRelationshipManagement');
                break
            case 'RA':
                navigate('/reports&analytics');
                break
            default:
                navigate('/accountManagement');
        }
    }
    
    return <>
        <div className="bms_section">
            <div className="reg_block" onClick={() => clickEventHandler()}>Account Management</div>
            <div className="reg_block" onClick={() => clickEventHandler('TP')}>Transaction Processing</div>
            <div className="reg_block" onClick={() => clickEventHandler('LM')}>Loan Management</div>
            <div className="reg_block" onClick={() => clickEventHandler('CRM')}>Customer Relationship Management</div>
            <div className="reg_block" onClick={() => clickEventHandler('RA')}>Reporting and Analytics</div>
        </div>
    </>
}

export default DashboardPage;