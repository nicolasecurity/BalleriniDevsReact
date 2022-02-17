import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";

export function AppRoutes() {
    return (
        <Router>
            <Route path="/dashboard" element={<Dashboard />} />
        </Router>
    )
}