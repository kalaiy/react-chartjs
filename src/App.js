import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
export default function App() {
  window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };
  var data = {
   "model": [
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-29T09:35:00",
      "sellTime": "2020-10-29T10:05:00",
      "quantity": 100,
      "buyValue": 511.28,
      "sellValue": 507.92,
      "brokageValue": 105.88,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbfd3bb3817e969b411"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-27T13:05:00",
      "sellTime": "2020-10-28T10:35:00",
      "quantity": 100,
      "buyValue": 497.45,
      "sellValue": 505.38,
      "brokageValue": 104.18,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbfd3bb3817e969b410"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-22T11:05:00",
      "sellTime": "2020-10-22T12:25:00",
      "quantity": 100,
      "buyValue": 505.88,
      "sellValue": 502.93,
      "brokageValue": 104.8,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbed3bb3817e969b40f"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-19T09:15:00",
      "sellTime": "2020-10-21T13:25:00",
      "quantity": 100,
      "buyValue": 476.86,
      "sellValue": 497.7,
      "brokageValue": 101.25,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbed3bb3817e969b40e"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-14T14:15:00",
      "sellTime": "2020-10-15T13:45:00",
      "quantity": 100,
      "buyValue": 463.3,
      "sellValue": 472.31,
      "brokageValue": 97.2,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbdd3bb3817e969b40d"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-09T11:05:00",
      "sellTime": "2020-10-12T10:25:00",
      "quantity": 100,
      "buyValue": 462.27,
      "sellValue": 468.08,
      "brokageValue": 96.65,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbdd3bb3817e969b40c"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-01T09:15:00",
      "sellTime": "2020-10-05T11:45:00",
      "quantity": 100,
      "buyValue": 430.34,
      "sellValue": 447.06,
      "brokageValue": 91.14,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbcd3bb3817e969b40b"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-25T14:05:00",
      "sellTime": "2020-09-29T09:55:00",
      "quantity": 100,
      "buyValue": 410.78,
      "sellValue": 432.39,
      "brokageValue": 87.59,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbcd3bb3817e969b40a"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-23T15:05:00",
      "sellTime": "2020-09-24T09:15:00",
      "quantity": 100,
      "buyValue": 418.74,
      "sellValue": 413.88,
      "brokageValue": 86.5,
      "indicatorCode": "SH:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb34bbbd3bb3817e969b409"
    },{
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-29T09:35:00",
      "sellTime": "2020-10-29T10:15:00",
      "quantity": 100,
      "buyValue": 511.28,
      "sellValue": 504.57,
      "brokageValue": 105.52,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbcd3bb3817e969b4a0"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-20T11:15:00",
      "sellTime": "2020-10-21T13:25:00",
      "quantity": 100,
      "buyValue": 494.91,
      "sellValue": 497.7,
      "brokageValue": 103.12,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbbd3bb3817e969b49f"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-14T14:15:00",
      "sellTime": "2020-10-15T13:45:00",
      "quantity": 100,
      "buyValue": 463.3,
      "sellValue": 472.31,
      "brokageValue": 97.2,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbbd3bb3817e969b49e"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-09T11:05:00",
      "sellTime": "2020-10-12T10:25:00",
      "quantity": 100,
      "buyValue": 462.27,
      "sellValue": 468.08,
      "brokageValue": 96.65,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbbd3bb3817e969b49d"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-10-06T14:45:00",
      "sellTime": "2020-10-08T14:15:00",
      "quantity": 100,
      "buyValue": 448.88,
      "sellValue": 456.13,
      "brokageValue": 94.02,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbad3bb3817e969b49c"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-15T14:35:00",
      "sellTime": "2020-09-16T11:05:00",
      "quantity": 100,
      "buyValue": 446.13,
      "sellValue": 442.96,
      "brokageValue": 92.36,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54dbad3bb3817e969b49b"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-11T15:05:00",
      "sellTime": "2020-09-14T13:25:00",
      "quantity": 100,
      "buyValue": 445.93,
      "sellValue": 448.3,
      "brokageValue": 92.89,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54db9d3bb3817e969b49a"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-04T13:15:00",
      "sellTime": "2020-09-04T14:05:00",
      "quantity": 100,
      "buyValue": 469.89,
      "sellValue": 466.58,
      "brokageValue": 97.29,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54db9d3bb3817e969b499"
    },
    {
      "traderId": "KD123",
      "watchlistId": "5f3ca429fa72957dafa04e7c",
      "instrumentId": "1510401",
      "exchangeSymbol": "AXISBANK",
      "buyTime": "2020-09-02T14:15:00",
      "sellTime": "2020-09-03T11:45:00",
      "quantity": 100,
      "buyValue": 480.03,
      "sellValue": 477.91,
      "brokageValue": 99.51,
      "indicatorCode": "CS:10 MIN",
      "tag": null,
      "orderType": "BACKTESTING",
      "id": "5fb54db9d3bb3817e969b498"
    },]
  };
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.buyTime;
    const bandB = b.buyTime;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  data.model = data.model.sort(compare);
  // console.log(data.model);
  var labelresult = [];
  for (var key in data.model) {
    labelresult.push(data.model[key].buyTime);
    labelresult.push(data.model[key].sellTime);
  }
  
  var label = [...new Set(labelresult)]; 
  

  var cdatasets = data.model.reduce(function(r, a) {
    r[a.indicatorCode] = r[a.indicatorCode] || [];
    r[a.indicatorCode].push(a);
    return r;
  }, Object.create(null));
  var chartdataset = [];
  var k = 0;
  for (var cdataset in cdatasets) {
    var pointdata = [];
    for (var key in cdatasets[cdataset]) {
      console.log(cdatasets[cdataset][key].buyTime);
      // const container = {};
      // container.x = o.buyTime;
      // container.y = o.buyValue;
      pointdata.push({
        x: cdatasets[cdataset][key].buyTime,
        y: cdatasets[cdataset][key].buyValue
      });
      pointdata.push({
        x: cdatasets[cdataset][key].sellTime,
        y: cdatasets[cdataset][key].sellValue
      });
    }

    var colors = [];
    pointdata.forEach((item, index) => {
      if (index % 2 == 0) colors.push(window.chartColors.blue);
      else {
        colors.push(window.chartColors.red);
      }
    });
    console.log(Object.values(window.chartColors)[k]);
    chartdataset.push({
      label: cdataset,
      fill: false,
      borderColor: Object.values(window.chartColors)[k],
      pointBackgroundColor: colors,
      data: pointdata
    });
    console.log(chartdataset);
    k = k + 1;
  }

  console.log(cdatasets);
  const dataTemplate = {
    labels: label,
    datasets: chartdataset
  };

  // console.log(JSON.stringify(buydata));
  return (
    <div style={{ height: "300px", width: "500px" }}>
      <div>
        <Line
          data={dataTemplate}
          options={{
            title: {
              display: true,
              text: `Backtesting Analyser ${data.model[0].exchangeSymbol}`,
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    </div>
  );
}
