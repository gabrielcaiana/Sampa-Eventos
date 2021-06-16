export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {})

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/error')
    }

    if (code === 401) {
      throw new Error('Sua sessão expirou');
    }

    if (code === 415 || code === 502 || code === 503) {
      throw new Error('Error');
    }

    if (code === 500) {
      throw new Error('Error 500');
    }
  })
}