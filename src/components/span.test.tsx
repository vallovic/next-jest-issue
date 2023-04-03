import { composeStories } from "@storybook/react";
import { cleanup, render } from "@testing-library/react";

import * as stories from "./span.stories";

const { Default } = composeStories(stories);

describe('Renders span', () => {
  beforeEach(cleanup);

  test('Default', async () => {
    render(<Default />);
  });
});
