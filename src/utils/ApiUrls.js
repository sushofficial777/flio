export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const BASE_URL_BUCKET_IMG = process.env.NEXT_PUBLIC_BASE_URL + "vls/public/storage/img/"
export const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL + "api/"
const API_URL = {
    BLOGS: {
        GET_SINGLE_BLOG: BASE_URL_API + "single"
    }
}
export default API_URL 