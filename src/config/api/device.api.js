import axios from 'axios';
import moment from 'moment';

const getDataDateSummary = async (date, type) => {
  if (!moment(date).isValid()) {
    return 'no date';
  }
  const response = await axios.get(
    `http://zoeticapi.ryantando.com/device/${date}/${type}/summary?dt=${new Date().getTime()}`,
  );
  if (response.status !== 200) {
    throw response;
  }
  return response;
};

const getDataDateSummaryAll = async (date) => {
  if (!moment(date).isValid()) {
    return 'no date';
  }
  try {
    const result = {
      thermometer: null,
      blood: null,
      oximeter: null,
    };
    const thermometer = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/thermometer/summary?dt=${new Date().getTime()}`,
    );
    result.thermometer = thermometer.data?.data || null;

    const blood = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/blood/summary?dt=${new Date().getTime()}`,
    );
    result.blood = blood.data?.data || null;

    const oximeter = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/oximeter/summary?dt=${new Date().getTime()}`,
    );
    result.oximeter = oximeter.data?.data || null;
    return result;
  } catch (err) {
    throw err;
  }
};

const postDataDeviceAll = async (data) => {
  const {thermometer = data, blood = data, oximeter = {}} = data;
  if (
    !thermometer.temperature ||
    !blood.systolic ||
    !blood.diastolic ||
    !oximeter.sp02 ||
    !oximeter.pulse_rate
  ) {
    return 'Please complete all data';
  }
  try {
    const resThermometer = await axios.post(
      'http://zoeticapi.ryantando.com/device/thermometer',
      thermometer,
    );
    const resBlood = await axios.post(
      'http://zoeticapi.ryantando.com/device/blood',
      blood,
    );
    const resOximeter = await axios.post(
      'http://zoeticapi.ryantando.com/device/oximeter',
      oximeter,
    );
    return {
      resThermometer,
      resBlood,
      resOximeter,
    };
  } catch (err) {
    throw err;
  }
};

const getDataDate = async (date, type) => {
  if (!moment(date).isValid()) {
    return 'no date';
  }
  const response = await axios.get(
    `http://zoeticapi.ryantando.com/device/${date}/${type}/summary?dt=${new Date().getTime()}`,
  );
  if (response.status !== 200) {
    throw response;
  }
  return response;
};

const getDataDateAll = async (date) => {
  if (!moment(date).isValid()) {
    return 'no date';
  }
  try {
    const result = {
      thermometer: null,
      blood: null,
      oximeter: null,
    };
    const thermometer = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/thermometer?dt=${new Date().getTime()}`,
    );
    result.thermometer = thermometer.data?.data || null;

    const blood = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/blood?dt=${new Date().getTime()}`,
    );
    result.blood = blood.data?.data || null;

    const oximeter = await axios.get(
      `http://zoeticapi.ryantando.com/device/${date}/oximeter?dt=${new Date().getTime()}`,
    );
    result.oximeter = oximeter.data?.data || null;
    return result;
  } catch (err) {
    throw err;
  }
};

const postDataDevice = async (date, type) => {
  const types = {
    thermometer: 'thermometer',
    blood: 'blood',
    oximeter: 'oximeter',
  };
  if (!date || !types[type]) {
    throw new Error('No types or date');
  }
  const response = await axios.get(
    `http://zoeticapi.ryantando.com/device/${date}/${type}`,
  );
  if (response.status === 200 || response.status === 201) {
    return response;
  }
  throw response;
};

export default {
  getDataDateSummary,
  getDataDateSummaryAll,
  getDataDate,
  getDataDateAll,
  postDataDevice,
  postDataDeviceAll,
};
