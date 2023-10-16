import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  

  
  export default function NavListDrawer({navLinks}) {
    return (
      <Box sx={{ width: 250 }}>
       
        <nav aria-label="secondary trash spam">
          <List>
            {
              navLinks.map(item => (
                <ListItem
                disablePadding
                key={item.title}
              >
                <ListItemButton
                  component="a"
                  href={item.path}
                >
                  <ListItemText  >{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
              ))
            }
          </List>
        </nav>
      </Box>
    );
  }
  