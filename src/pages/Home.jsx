import Dashboard from "../components/Dashboard";
import UploadCSV from "../components/UploadCSV";

export default function Home() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>📊 User Dashboard</h1>
            <UploadCSV />
            <hr style={{ margin: "20px 0" }} />
            <Dashboard />
        </div>
    );
}
