import { createMachine } from 'xstate';
const demoMachine = createMachine({
  id: 'demo',
  tsTypes: {} as import("./xstate.typegen").Typegen0,
  schema: {
    context: {} as { value: string },
    events: {} as { type: 'FOO' },
  },
  context: {
    value: '',
  },
  initial: 'idle',
  states: {
    idle: {},
  },
});