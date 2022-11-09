import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const AssetTypeGraph = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Asset Types Chart',
      },
    },
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const datasets = _.chain(props.data)
      .sortBy('asset_type')
      .groupBy('asset_type')
      .map((value, key) => {
        return {
          label: key,
          data: value.length,
        };
      })
      .value();
    const temp = datasets.map((row) => row.data);
    const labels = datasets.map((row) => row.label);

    setData({
      labels: labels,
      datasets: [
        {
          fill: true,
          label: '',
          data: temp,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    });
  }, [props.data]);

  return data?.datasets && <Line options={options} data={data} />;
};

AssetTypeGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      guid: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      asset_type: PropTypes.string.isRequired,
      serial_number: PropTypes.string.isRequired,
      service_contract: PropTypes.bool.isRequired,
      warranty: PropTypes.bool.isRequired,
    }),
  ),
};

export default AssetTypeGraph;
