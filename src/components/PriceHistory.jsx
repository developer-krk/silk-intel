import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function PriceHistory({ priceHistory }) {
    return (
        <div className="price-history">
            <h3>Price History</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="price"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PriceHistory;