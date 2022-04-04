type DaemonState = 'watch' | 'sleep'

export interface Daemon {
  watch: () => void
  sleep?: () => void
}
