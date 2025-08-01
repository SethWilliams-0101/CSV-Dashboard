import { useQuery } from "@tanstack/react-query";
import api from "../api/apiClient";
import { useState } from "react";

export default function Dashboard() {
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["users", page],
        queryFn: async () => {
            const res = await api.get(`/users?page=${page}&limit=50`);
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    return (
        <div>
            <h2>Total Users: {data.total}</h2>
            <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Industry</th>
                        <th>Employee Range</th>
                        <th>Mkto Person Notes</th>
                        <th>UTM Source</th>
                        <th>UTM Content</th>
                        <th>UTM Detail</th>
                        <th>UTM Medium</th>
                        <th>UTM Campaign</th>
                        <th>Whitepaper Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map(user => (
                        <tr key={user._id}>
                            <td>{user.Name}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.Company}</td>
                            <td>{user.Title}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Address}</td>
                            <td>{user.City}</td>
                            <td>{user.State}</td>
                            <td>{user.PostalCode}</td>
                            <td>{user.Country}</td>
                            <td>{user.Industry}</td>
                            <td>{user.Employee_Range__c}</td>
                            <td>{user.MktoPersonNotes}</td>
                            <td>{user.UTM_Source__c}</td>
                            <td>{user.UTM_Content__c}</td>
                            <td>{user.UTM_Detail__c}</td>
                            <td>{user.UTM_Medium__c}</td>
                            <td>{user.UTM_Campaign__c}</td>
                            <td>{user.Whitepaper_Title__c}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: "10px" }}>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
}
