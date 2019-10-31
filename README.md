Steps for try:

1. Use `create-react-app` to create a project
2. `yarn add @material-ui/core @donrsh/test-rmt-pkg`
3. Replace `App.js` with the following:

```jsx
import React from 'react';

import { MuiThemeProvider, createMuiTheme, colors } from '@material-ui/core';
import { LoadingButton, GreenThemedLoadingButton } from '@donrsh/test-rmt-pkg';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.amber[500],
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div>
        <LoadingButton color="primary" variant="outlined" loading>
          ABD
        </LoadingButton>
        <span> ⬅ This use user-defined theme</span>
      </div>

      <div>
        <GreenThemedLoadingButton color="primary" variant="outlined" loading>
          Green Button
        </GreenThemedLoadingButton>
        <span> ⬅ This use theme defined in package</span>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
```

(特別注意有沒有 intellisense, 應該要有. 因為這個專案是用 typescript 寫的, build 完會產生 .d.ts 檔)
