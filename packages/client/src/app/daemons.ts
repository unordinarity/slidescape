import { Daemon } from 'src/shared/lib/daemon'
import { colorTheme } from 'src/entities/settings'
import { time } from 'src/entities/time'
import { globalStylesDaemon } from 'src/shared/ui'
import { backdropColorDaemon } from 'src/entities/backdrop'

export const daemons: Array<Daemon> = [
  ...colorTheme.daemons,
  time.daemon,
  globalStylesDaemon,
  backdropColorDaemon,
]
