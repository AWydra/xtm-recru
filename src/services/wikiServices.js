import axios from 'axios';
import wikiActions from 'actions/wikiActions';

const baseUrl = '//en.wikipedia.org/w/api.php';
let source = axios.CancelToken.source();

const getData = (query) => async (dispatch) => {
  dispatch(wikiActions.setLoading(true));
  try {
    const response = await axios.get(baseUrl, {
      cancelToken: source.token,
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        srlimit: 10,
        origin: '*',
        srsearch: query,
      },
    });
    dispatch(wikiActions.setLoading(false));
    dispatch(wikiActions.setItems(response.data.query.search));
  } catch (err) {
    dispatch(wikiActions.setItems([]));
    dispatch(wikiActions.setHeading('Something went wrong...'));
  }
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  getData,
  cancel,
};
