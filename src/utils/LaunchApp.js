import axios from 'axios';
import { ErrorMsg } from 'components/accounts';
import FileSaver from 'file-saver';
import { isProd } from 'utils';

const baseUrl = `https://installer-m3rbwjxm5q-uc.a.run.app`;

export const downloadTemplate = async (instance_zuid, token, setloading) => {
  setloading(true);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const body = {
    zuid: instance_zuid,
    token,
  };
  const url = `${baseUrl}/download`;

  try {
    await axios
      .post(url, body, {
        responseType: 'arraybuffer',
        headers,
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/zip' });
        FileSaver.saveAs(blob, `${instance_zuid}`);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        ErrorMsg({
          title: error.message,
          text: error?.response.data?.message,
        });
      });
  } catch (error) {
    setloading(false);
    ErrorMsg({
      title: error.message,
      text: error?.response.data?.message,
    });
  }
};

export const getTemplate = async (zuid, setData) => {
  const urlStage = `https://39ntbr6g-dev.webengine.zesty.io/data/entity.json?zuid=${zuid}`;
  const urlProd = `https://extensions.zesty.io/data/entity.json?zuid=${zuid}`;
  const url = isProd ? urlProd : urlStage;
  await axios
    .get(url)
    .then((response) => {
      setData(response.data[0]);
      return response;
    })
    .catch((error) => {
      return error;
    });
};
