import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Chart } from "react-google-charts"

export const ChartComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          contributionsCollection(
            from: "2020-01-01T00:00:00.000Z"
            to: "2020-12-31T00:00:00.000Z"
          ) {
            contributionCalendar {
              colors
              totalContributions
              isHalloween
              weeks {
                contributionDays {
                  weekday
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    }
  `)

  const totalContributions =
    data.github.viewer.contributionsCollection.contributionCalendar
      .totalContributions
  const chartData = data.github.viewer.contributionsCollection.contributionCalendar.weeks.reduce(
    (prev, curr) => {
      let arr = []
      for (let day of curr.contributionDays) {
        arr.push([new Date(day.date), day.contributionCount])
      }

      return [...prev, ...arr]
    },
    []
  )

  return (
    <div className="container" style={{ width: "1000px" }}>
      <Chart
        width="100%"
        height={350}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Count" },
          ],
          ...chartData,
        ]}
        options={{
          title: totalContributions + " contributions in 2020",

          calendar: {
            yearLabel: {
              fontName: "Aleo",
              fontSize: 30,
              color: "#212529",
            },
            monthLabel: {
              fontName: "Aleo",
              fontSize: 12,
              color: "#212529",
            },
            dayOfWeekLabel: {
              fontName: "Aleo",
              fontSize: 12,
              color: "#212529",
            },
            cellColor: {
              stroke: "#eee", // Color the border of the squares.
              strokeOpacity: 0.5, // Make the borders half transparent.
              strokeWidth: 3, // ...and two pixels thick.
            },
            monthOutlineColor: {
              stroke: "#eee",
              strokeOpacity: 0.8,
              strokeWidth: 1,
            },
          },
          noDataPattern: {
            backgroundColor: "#76a7fa",
            color: "#a0c3ff",
          },
          toolTip: {
            isHtml: false,
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  )
}
