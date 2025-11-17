/// <reference types="vitest" />
import 'vuetify/styles'               // ensure CSS is processed by Vite
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { config } from '@vue/test-utils'

// Minimal ResizeObserver mock for jsdom/Vitest
class MockResizeObserver {
  constructor(private callback?: ResizeObserverCallback) {}
  observe() { /* no-op */ }
  unobserve() { /* no-op */ }
  disconnect() { /* no-op */ }
}
;(global as any).ResizeObserver = (global as any).ResizeObserver || MockResizeObserver

const vuetify = createVuetify({ components, directives })

// apply Vuetify to every mount by default
config.global.plugins = [vuetify]