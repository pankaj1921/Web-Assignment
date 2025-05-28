import './ActivityChart.css'

const mockActivityData = [
  { day: 'Mon', value: 50 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 65 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 45 },
  { day: 'Sat', value: 75 },
  { day: 'Sun', value: 60 },
];

function ActivityChart() {
  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <p className="subtitle">3 appointments this week</p>
      <div className="chart-bars">
        {mockActivityData.map((item, index) => (
          <div className="bar-group" key={index}>
            <div
              className="bar"
              style={{ height: `${item.value}px` }}
              title={`${item.value} units`}
            ></div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityChart;
