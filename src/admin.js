import dva from 'dva';
import { browserHistory } from 'dva/router';
import './admin.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example'));

app.model(require('./models/franchisees'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');