import {Http} from "../utils/http";

class Theme {

    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    static forYou = 't-6'

    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        })
    }
}

export {
    Theme
}