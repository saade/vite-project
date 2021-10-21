import { ref } from 'vue'
import useSleep from '../use-sleep'

const notification = ref(null)

export default function() {
  async function notify() {
    notification.value = Object.assign(
      {
        position: 'top',
        timeout: 5000,
        type: 'positive',
      },
      notification,
    )

    await useSleep(notification.value.timeout)

    notification.value = null
  }

  return {
    notification,
    notify,
  }
}
