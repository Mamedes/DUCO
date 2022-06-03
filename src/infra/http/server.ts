import { connect } from '@infra/database/AppDataSource';

import { app } from './app';

(async () => {
  await connect();
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running on port ${process.env.PORT || 3000}`)
  );
})();
