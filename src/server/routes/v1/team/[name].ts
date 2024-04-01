import { defineEventHandler, getQuery } from 'h3';

enum Langage {
  SOUTENU = 'soutenu',
  WESH = 'wesh'
}

export default defineEventHandler(
  (event) => {
    const { langage } = getQuery(event);

    if (langage === Langage.SOUTENU) {
      return {
        message: `Je te salue ${event.context.params?.['name']}.`
      }
    }

    return {
      message: `Wesh, c comman ${event.context.params?.['name']} ?`
    }
  }
);
