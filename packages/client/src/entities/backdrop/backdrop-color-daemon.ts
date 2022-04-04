import { Daemon } from 'src/shared/lib/daemon'

import { backdrop } from './store'

export const backdropColorDaemon: Daemon = {
  watch: () => {
    backdrop.current.watch(backdrop => {
      if (backdrop?.color) {
        document.body.style.setProperty('background-color', backdrop.color)
      } else {
        document.body.style.removeProperty('background-color')
      }
    })
  }
}
