import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import {registerMicroApps, start} from 'qiankun';

window.__POWERED_BY_QIANKUN__ = true;

registerMicroApps([
    {
        name: 'react18app',
        entry: '//localhost:8200',
        container: '#container',
        activeRule: '/app-react',
    },
]);
// 启动 qiankun
start();

function App() {
    return (
        <>
            <Link to="/">Home</Link> | {' '}
            <Link to="/app-react">React</Link> | {' '}
            <h1>Hello World, Im host</h1>
        </>
    );
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app-react" />
        </Routes>
    );
};

const root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));

root.render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </StrictMode>
);
