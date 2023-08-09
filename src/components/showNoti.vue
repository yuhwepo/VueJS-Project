<script setup>
import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

const showNotification = (title, text, type) => {
  notify({
    title: title,
    text: text,
    type: type,
  })
}
</script>
