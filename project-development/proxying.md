# Proxying

How to setup proxying in React and usage:

```javascript
  server:{
    port:3000,
    proxy:{
      '/api':{
        target:'http://localhost:3001',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
  },
```

```javascriptreact
    const fetchJobsData = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('error fetching jobs', error);
      } finally {
```

1. [**`server`**](https://vscode-file/vscode-app/c:/Users/Krolik/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):
   * This is the configuration object for the Vite development server.
2. **`port: 3000`**:
   * This sets the port on which the Vite development server will run. In this case, the server will be accessible at `http://localhost:3000`.
3. [**`proxy`**](https://vscode-file/vscode-app/c:/Users/Krolik/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):
   * This is the configuration object for setting up a proxy. A proxy is used to forward requests from the Vite development server to another server.
4. **`'/api'`**:
   * This specifies that any request starting with `/api` should be proxied.
5.  **`target: 'http://localhost:3001'`**:

    * This sets the target server to which the requests should be proxied. In this case, requests to `/api` will be forwarded to `http://localhost:3001.`


6. **`rewrite: (path) => path.replace(/^\/api/, '')`**:
   * This function rewrites the URL path before forwarding it to the target server. In this case, it removes the `/api` prefix from the path.
   * For example, a request to `http://localhost:3000/api/jobs` will be proxied to `http://localhost:3001/jobs`.
