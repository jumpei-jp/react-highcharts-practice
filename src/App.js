import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HighchartsWrapper = (props) => {
   console.log(props.chartData); // this is always correct

    let options = {
      chart: {
        renderTo: 'container',
        type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
    }

    return(
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                oneToOne={true}
            />
    );
}

export default HighchartsWrapper;