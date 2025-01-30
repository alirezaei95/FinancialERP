// src/frontend/App.tsx

import { useCallback, useState } from "react";
import { Button } from '@fluentui/react-components';
import { BasicMenu } from "./container/menu";

// 1. Notice that we don't import 'backend'

function App() {
  /* snip... */
  // const [nodeVersion, setNodeVersion] = useState<string | undefined>(undefined);

  // const updateNodeVersion = useCallback(
  //   async () => setNodeVersion(await backend.nodeVersion("Hello from App.tsx!")),
  //   []
  // );

  return (
    <div className="App">
      {/* snip... */}
        <BasicMenu />
        {/* <Button onClick={updateNodeVersion}>
          Node version is {nodeVersion}
        </Button> */}
      {/* snip... */}
    </div>
  );
}

export default App