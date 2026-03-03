import React from "react"

const statsData = [
  { value: "95%", label: "Customer Satisfaction" },
  { value: "120K+", label: "Active Users" },
  { value: "4.9★", label: "Average Rating" },
]

const Stats = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row gap-10 md:gap-20 mt-12 text-center"
    >
      {statsData.map((stat, index) => (
        <div key={index} className="stat-item">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {stat.value}
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
})

export default Stats