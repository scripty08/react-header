import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/header' }));
    app.start(3006);
};

init().catch((err) => {
    console.error(err.message);
});
