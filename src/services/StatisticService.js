import { axiosPrivate } from '../api/axios';

const STATISTIC_URL =
    process.env.REACT_APP_API_GATEWAY + '/api/v1/statistic-service/admin/statistic';
class StatisticService {
    statisticRevenue(year) {
        return axiosPrivate.get(STATISTIC_URL + '/chartSales?year=' + year);
    }
    statisticRating() {
        return axiosPrivate.get(STATISTIC_URL + '/chartRating');
    }
    getTop5OrderLatest() {
        return axiosPrivate.get(STATISTIC_URL + '/top-5-latest');
    }
    getTotal() {
        return axiosPrivate.get(STATISTIC_URL + '/total');
    }
}

export default new StatisticService();
