import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import * as singleSpa from "single-spa";

const drawerWidth = 240;

interface menu {
  name: string;
  toUrl: string;
}

const menu: menu[] = [
  {
    name: "APP1", 
    toUrl: "app1",
  },
  {
    name: "APP2", 
    toUrl: "app2",
  }
];

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Simple Micro Frontend Single-SPA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menu.map(({name, toUrl}, index) => (
              <ListItem button onClick={() => singleSpa.navigateToUrl(toUrl)} key={name}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
