import { BASE_URL } from "./shearData"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

/// Get Fetch
export const getFetch = (url, setState) => {
    fetch(`${BASE_URL}${url}`)
        .then(res => res.json())
        .then(data => data && setState(data))
}

/// Post Fetch
export const postFetch = (url, dataSend, alert, login = null) => {
    fetch(`${BASE_URL}${url}.json`, {
        method: 'POST',
        body: JSON.stringify(dataSend)
    })
        .then(res => res.json())
        .then(dataID => {
            login && login(dataID.name)
            MySwal.fire(
                alert.title,
                alert.subTitle,
                alert.icon
            )
        })

}

/// Put Fetch
export const putFetch = (url, dataSend, alert) => {
    fetch(`${BASE_URL}${url}.json`, {
        method: 'PUT',
        body: JSON.stringify(dataSend)
    }).then(res => {
        MySwal.fire(
            alert.title,
            alert.subTitle,
            alert.icon
        )
    })
}

/// Delete Fetch
export const deleteFetch = (url, alert) => {
    fetch(`${BASE_URL}${url}.json`, {
        method: 'DELETE',
    }).then(res => {
        MySwal.fire(
            alert.title,
            alert.subTitle,
            alert.icon
        )
    })
}