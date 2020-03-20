//@flow
import { RESTDataSource } from 'apollo-datasource-rest';
import CONFIG from '../../config/'

export default class ImageAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pixabay.com/api/';
    }

    willSendRequest(request: any){
        request.params.set('key', CONFIG.ENV.PIXABAY_API_KEY)
    }

    async image(id: number) {
        const res = await this.get('/', {
            id
        })

        return res.hits[0]
    }

    async search(q: any, page: number, per_page: number) {
        const res = await this.get('/', {
            ...q,
            page,
            per_page
        })
        return res.hits
    }
};