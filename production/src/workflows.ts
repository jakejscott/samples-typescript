import { createActivityHandle } from '@temporalio/workflow';
import type * as activities from './activities';

const { greet } = createActivityHandle<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function example(name: string): Promise<string> {
  return await greet(name);
}
