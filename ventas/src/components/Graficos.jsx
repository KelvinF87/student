// https://www.ag-grid.com/charts/react/quick-start/?utm_source=charts-homepage&utm_medium=features-section&utm_campaign=homepage-cta
import React, { useState } from 'react';
// React Chart Component
import { AgCharts } from 'ag-charts-react';

const ChartExample = () => {
    // Chart Options: Control & configure the chart
    const [chartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [
            { month: 'Ene', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
    });

    return (
        // AgCharts component with options passed as prop
        <AgCharts options={chartOptions} />
    );
};

export default function Graficos() {
    return (
        <div>
            <h1>Gráfico de Ventas</h1>
            <ChartExample />
        </div>
    );
}