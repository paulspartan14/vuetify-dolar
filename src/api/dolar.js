import request from '@/services/axios'

export function getDolar(day){
    return request({
        url: `/dolar/${day}`,
        method: 'GET'
    })
}