import { useRef } from "react";

const AccountManagementPage = () => {
    const accountNumber = useRef();

    const accountCheckEvent = () => {
        console.log("accountNumber: ", accountNumber.current.value);
    }

    return <div>
        <h1>Account Management Page</h1>
        <div>
            <label for="accountnumber">Account Number</label>
            <input type="text" id="accountnumber" ref={accountNumber} />
            <button onClick={accountCheckEvent}>Check Details</button>
        </div>
    </div>
}

export default AccountManagementPage;